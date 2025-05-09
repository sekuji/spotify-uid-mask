# Spotify UID Mask

A minimal proxy that hides your Spotify UID while displaying music activity using [kittinan/spotify-github-profile](https://github.com/kittinan/spotify-github-profile). Useful if your UID contains personal information.

---

## Quick Start

1. Copy your full visualization URL from [kittinan’s tool](https://spotify-github-profile.kittinanx.com/api/login).
2. Clone this repo and paste the URL into `api/spotify.js`.
3. Deploy to Vercel, set your `SPOTIFY_UID` as an environment variable.

---

## Setup Instructions

### 1. Get Your Spotify Visualizer URL

- Go to [kittinan’s Spotify profile tool](https://spotify-github-profile.kittinanx.com/api/login) and log in.
- Customize the style and copy the URL inside brackets (e.g., starts with `https://spotify-github-profile...`).
- Extract your UID from the `uid=...` query parameter.

### 2. Clone and Configure

- Clone this repo:

  ```bash
  git clone https://github.com/sekuji/spotify-uid-mask.git
  ```

- Open `api/spotify.js` and set the `url` variable to your copied visualizer URL.
- Replace your actual UID in the URL with `${uid}`. Example:

  ```js
  const url = `https://spotify-github-profile.kittinanx.com/api/view?uid=${uid}&theme=default`;
  ```

### 3. Upload to GitHub

- Create a new GitHub repository (public or private).
- Upload the `api/` folder (with `spotify.js`) and `vercel.json`.

Or via terminal:

```bash
cd spotify-uid-mask
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 4. Deploy on Vercel

- Log into [Vercel](https://vercel.com) and import your GitHub repo.
- In the Environment Variables section (before clicking Deploy), add:
  - Name: `SPOTIFY_UID`
  - Value: Your Spotify UID

- Leave everything else as-is and click Deploy.

---

## Use the Masked URL

Once deployed, you can access your visualizer at:

```
https://your-vercel-project.vercel.app/api/spotify
```

Use this URL instead of exposing your actual UID.
