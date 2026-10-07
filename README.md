# Our admin website

The Panzi admin console. It talks to the same API as the Expo app, so everything it shows is live app data.

| Folder | What it is | Port |
|---|---|---|
| `admin/` | The admin website (React + Vite) | 5173 |
| `C:\Users\Kenne\panzi\server` | The Panzi API (Express), shared with the Expo app | 8080 |

On 2026-09-29 the admin routes were merged into the app's server (`panzi\server`), and that is now the only API. The copy that used to live here was renamed `server-old-backup/`. It is kept only for reference, is not started, and should not be edited.

## Run it

Double-click `start.bat`. It opens two windows (API first, then the website) and opens http://localhost:5173 in your browser. Close both windows to stop.

If `present.ps1` is already running the app's server and tunnels, `start.bat` sees port 8080 in use and only starts the website. The phone and the console then share that one server.

The launcher always uses the real API and administrator sign-in. It overrides any sample-data, skipped-auth or public-preview flags it inherits. If this workspace already has a sample preview running on port 5173, it replaces that preview. An admin website and API that are already connected stay running. Unrelated processes on port 5173 are left untouched and reported.

Or by hand, in two terminals:

```powershell
cd "$HOME\panzi\server"
npm run dev
```

```powershell
cd "$HOME\Our admin website\Our admin website\admin"
npm run dev
```

Start the API first and keep both windows open. The website must be on port 5173: the API only accepts that origin (`ALLOWED_ORIGINS` in `panzi\server\.env`). The website refuses to start on any other port rather than show "Failed to fetch".

On a new computer, run `npm install` in both `panzi\server` and `admin/` first.

## Check the databases

The API connects to MongoDB Atlas (app data), Firebase (sign-in) and Supabase (avatar and dish photo storage), using the keys in `panzi\server\.env`. To confirm all three accept those keys:

```powershell
cd "$HOME\panzi\server"
npm run check
```

Each line prints `OK` or `FAIL` with the reason. The check only reads; it changes nothing.

See `admin/README.md` for the workspace screens, and `panzi\server\README.md` for the API.
