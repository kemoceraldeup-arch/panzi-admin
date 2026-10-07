@echo off
setlocal
rem Starts the Panzi API and the admin website, each in its own window.
rem Close a window (or press Ctrl+C in it) to stop that part.
rem Keep connected services; replace this project's admin if it is a sample preview.

cd /d "%~dp0"

rem The API is the same server the Expo app uses, in the app's own folder. The
rem copy that used to live here is server-old-backup\ and is no longer started.
rem The app's folder is panzi\ (the GitHub clone); panzi-handoff\ is the older
rem name it had as a zip, still found if that is the one on this computer.
set "SERVER_DIR=%USERPROFILE%\panzi\server"
if not exist "%SERVER_DIR%\package.json" if exist "%USERPROFILE%\panzi-handoff\server\package.json" set "SERVER_DIR=%USERPROFILE%\panzi-handoff\server"

rem Process variables override Vite .env files and inherited preview flags.
set "VITE_SAMPLE_DATA=false"
set "VITE_SKIP_AUTH=false"
set "VITE_PUBLIC_PREVIEW=false"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install the LTS version from https://nodejs.org, then run this again.
  pause
  exit /b 1
)

if not exist "%SERVER_DIR%\package.json" (
  echo Could not find the Panzi server at %SERVER_DIR%
  echo Put the panzi folder in %USERPROFILE%, or change SERVER_DIR at the top of this file.
  pause
  exit /b 1
)

rem The key files are sent separately from the zip, never inside it.
set MISSING=
if not exist "%SERVER_DIR%\.env" set MISSING=%MISSING% %SERVER_DIR%\.env
if not exist "%SERVER_DIR%\serviceAccount.json" set MISSING=%MISSING% %SERVER_DIR%\serviceAccount.json
if not exist "%~dp0admin\.env" set MISSING=%MISSING% admin\.env
if defined MISSING (
  echo Missing key files:%MISSING%
  echo Ask for them and put each one in the folder shown, then run this again.
  pause
  exit /b 1
)

rem First run on a new computer: the packages are not copied with the folder,
rem so install them once. Later runs skip this.
if not exist "%SERVER_DIR%\node_modules" (
  echo Installing API packages, this takes a minute the first time...
  pushd "%SERVER_DIR%" && call npm install && popd
)
if not exist "%~dp0admin\node_modules" (
  echo Installing website packages, this takes a minute the first time...
  pushd "%~dp0admin" && call npm install && popd
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\prepare-connected-admin.ps1"
if errorlevel 1 (
  echo Could not prepare the connected admin website. See the message above.
  pause
  exit /b 1
)

netstat -ano | findstr /r /c:":8080 .*LISTENING" >nul
if errorlevel 1 (
  start "Panzi API (port 8080)" cmd /k "cd /d ""%SERVER_DIR%"" && npm run dev"
  rem Give the API a head start so the first page load does not fail.
  powershell -NoProfile -Command "Start-Sleep -Seconds 5"
) else (
  echo API already running on port 8080.
)

netstat -ano | findstr /r /c:":5173 .*LISTENING" >nul
if errorlevel 1 (
  start "Panzi admin website (port 5173)" cmd /k "cd /d ""%~dp0admin"" && npm run dev"
  powershell -NoProfile -Command "Start-Sleep -Seconds 4"
) else (
  echo Admin website already running on port 5173.
)

start "" http://localhost:5173
