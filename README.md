# WanderLust

Simple travel listings app with map integration and image uploads.

## Features
- Create, view, edit and delete listings
- Upload images (Cloudinary)
- Map location lookup (Mapbox)
- Reviews and user authentication
- Server-rendered views with EJS

## Tech Stack
- Frontend: EJS templates, plain JS, CSS
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)

## Prerequisites
- Node.js (project tested with Node 16)
- MongoDB (local or Atlas)

## Quick Start
1) Clone
```bash
git clone https://github.com/0506-kv/WanderLust.git
cd WanderLust
```

2) Install
```bash
npm install
```

3) Environment
Create a `.env` file in the project root with these variables:
```
PORT=8080
ATLASDB_URL=mongodb://localhost:27017/wanderlust
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```

4) Run (PowerShell)
```powershell
$env:NODE_ENV="development"; $env:PORT="8080"; node app.js
```

If you prefer npm, add a start script to `package.json`:
```json
"scripts": {
	"start": "node app.js"
}
```

5) Open
- App: http://localhost:8080

## Notes
- Ensure `ATLASDB_URL` is correct before starting.
- Keep `.env` out of version control in production and set `NODE_ENV=production`.

## Routes (main)
- GET /listings — list all listings
- GET /listings/new — create listing form
- POST /listings — create new listing
- GET /listings/:id — show listing
- GET /listings/:id/edit — edit form
- PUT /listings/:id — update listing
- DELETE /listings/:id — delete listing
- POST /listings/:id/reviews — add review
- Auth: /login, /signup, /logout


