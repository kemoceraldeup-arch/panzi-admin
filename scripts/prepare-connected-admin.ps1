# Only replace a sample-mode Vite process belonging to this exact workspace.
# A connected admin is left running; an unrelated listener is never stopped.
$ErrorActionPreference = 'Stop'
try {
    $adminDirectory = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../admin'))
    $expectedVite = [IO.Path]::GetFullPath((Join-Path $adminDirectory 'node_modules/vite/bin/vite.js'))
    $listeners = @(Get-NetTCPConnection -State Listen -LocalPort 5173 -ErrorAction SilentlyContinue)
    if ($listeners.Count -eq 0) { exit 0 }

    $owners = @($listeners.OwningProcess | Select-Object -Unique)
    foreach ($owner in $owners) {
        $process = Get-CimInstance Win32_Process -Filter "ProcessId = $owner"
        $viteArgument = [regex]::Match($process.CommandLine, '"([^"\r\n]*[\\/]vite[\\/]bin[\\/]vite\.js)"')
        if (-not $viteArgument.Success -or [IO.Path]::GetFullPath($viteArgument.Groups[1].Value) -ne $expectedVite) {
            throw 'Port 5173 is used by another process. Close that process and launch start.bat again.'
        }
    }

    # Vite may bind only IPv6 localhost, or only IPv4 when --host was supplied.
    $hostAddress = if (@($listeners.LocalAddress) -contains '::1' -or @($listeners.LocalAddress) -contains '::') { '[::1]' } else { '127.0.0.1' }
    $module = (Invoke-WebRequest "http://${hostAddress}:5173/src/api/client.ts" -UseBasicParsing -TimeoutSec 8).Content
    if ($module -notmatch '"VITE_SAMPLE_DATA"\s*:\s*"(?:true|false)"') {
        throw 'Could not verify the running admin mode. Close its terminal and launch start.bat again.'
    }
    if ($module -notmatch '"VITE_(?:SAMPLE_DATA|SKIP_AUTH|PUBLIC_PREVIEW)"\s*:\s*"true"') {
        Write-Host 'Connected admin already running on port 5173.'
        exit 0
    }

    Write-Host 'Replacing the sample-data preview with the connected admin...'
    foreach ($owner in $owners) { Stop-Process -Id $owner -ErrorAction Stop }
    $deadline = [DateTime]::UtcNow.AddSeconds(8)
    do {
        if (-not (Get-NetTCPConnection -State Listen -LocalPort 5173 -ErrorAction SilentlyContinue)) { exit 0 }
        Start-Sleep -Milliseconds 200
    } while ([DateTime]::UtcNow -lt $deadline)
    throw 'Port 5173 did not become available. Close the old admin terminal and try again.'
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
