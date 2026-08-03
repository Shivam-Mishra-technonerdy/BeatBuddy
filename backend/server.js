import express from 'express';
import prisma from './db.js'; // Import our single, secure Prisma instance

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// 1. Fetch All Songs Catalog
app.get('/api/songs', async (req, res) => {
  try {
    const allSongs = await prisma.songs.findMany();
    res.json(allSongs);
  } catch (error) {
    console.error("❌ Prisma songs fetch failed:", error);
    res.status(500).json({ error: "Internal server error fetching songs." });
  }
});

// 2. NEW ROUTE: Fetch All Master Playlists
app.get('/api/playlists', async (req, res) => {
  try {
    // Tells Prisma to pull every single playlist row from the cloud
    const allPlaylists = await prisma.playlists.findMany();
    res.json(allPlaylists);
  } catch (error) {
    console.error("❌ Prisma playlists fetch failed:", error);
    res.status(500).json({ error: "Internal server error fetching playlists." });
  }
});

// 3. NEW ROUTE: Fetch a Specific Playlist alongside its matching Songs!
app.get('/api/playlists/:id', async (req, res) => {
  try {
    // Extract the dynamic playlist ID number from the incoming URL address string
    const playlistId = parseInt(req.params.id);

    // Safety Check: If the parsed ID is not a valid number, stop and return a 400 error
    if (isNaN(playlistId)) {
      return res.status(400).json({ error: "Invalid playlist ID layout parameter." });
    }

    // Advanced Query: Fetch the unique playlist, including its junction map entries
    const playlistData = await prisma.playlists.findUnique({
      where: { id: playlistId },
      include: {
        playlist_songs: {
          include: {
            songs: true // Deeply includes the actual song objects mapped inside the junction!
          }
        }
      }
    });

    // If the database returns null, it means no playlist matches that number
    if (!playlistData) {
      return res.status(404).json({ error: "Target playlist data not found." });
    }

    res.json(playlistData);
  } catch (error) {
    console.error("❌ Prisma unique playlist relational fetch failed:", error);
    res.status(500).json({ error: "Internal server error fetching target playlist profile." });
  }
});

// 4. Base API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: "Healthy", message: "BeatBuddy API Server is live! 🎧" });
});

app.listen(PORT, () => {
  console.log(`🚀 Industry-grade BeatBuddy Server running on http://localhost:${PORT}`);
});
