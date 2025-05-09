// This proxy hides your Spotify UID to protect personal info
// Based on https://github.com/kittinan/spotify-github-profile
export default async function handler(req, res) {
  // Get the Spotify UID from the .env file (set in Vercel)
  // To find your UID:
  // 1. Visit https://spotify-visual-proxy.vercel.app/
  // 2. Copy the UID from the URL (e.g., in https://spotify-github-profile.kittinanx.com/api/view?uid=yourname123&..., the UID is "yourname123")
  // 3. Add it to Vercel's .env as SPOTIFY_UID=yourname123
  const uid = process.env.SPOTIFY_UID;

  // Check if UID is set
  if (!uid) {
    return res.status(500).json({ error: 'SPOTIFY_UID not set in environment variables' });
  }

  // Paste your full Spotify profile URL here (from https://spotify-visual-proxy.vercel.app/)
  // Example: https://spotify-github-profile.kittinanx.com/api/view?uid=yourname123&cover_image=true&theme=novatorem
  // Replace the UID (e.g., yourname123) with ${uid} to use the .env variable
  const url = ``; // Paste your URL here and replace uid=yourname123 with uid=${uid}

  // Check if URL is set
  if (!url) {
    return res.status(500).json({ error: 'Please paste your URL in spotify.js' });
  }

  try {
    // Fetch the SVG from the Spotify profile API
    const response = await fetch(url, {
      headers: {
        // Optional: Identifies this proxy to the server
        'User-Agent': 'Spotify-UID-Mask/1.0',
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error fetching SVG' });
    }

    // Get the SVG content
    const svg = await response.text();

    // Send the SVG to the user
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(svg);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
