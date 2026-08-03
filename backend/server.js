import express from 'express';
import prisma from './db.js'; // Import our single, secure Prisma instance

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// 1. Core Industry-Standard Endpoint: Fetches all tracks from the cloud
app.get('/api/songs', async (req, res) => {
  try {
    // Uses our generated engine to pull all rows out of the songs table
    const allSongs = await prisma.songs.findMany();
    
    // Send back the raw array of tracks inside a clean JSON packet
    res.json(allSongs);
  } catch (error) {
    console.error("❌ Prisma fetch operation failed:", error);
    res.status(500).json({ error: "Internal server error fetching songs data." });
  }
});

// 2. Health check route remains fully active
app.get('/api/health', (req, res) => {
  res.json({ status: "Healthy", message: "BeatBuddy API Server is live! 🎧" });
});

app.listen(PORT, () => {
  console.log(`🚀 Industry-grade BeatBuddy Server running on http://localhost:${PORT}`);
});
