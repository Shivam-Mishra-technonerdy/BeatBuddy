import express from 'express';
import dotenv from 'dotenv';

// 1. Initialize environment variables configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware: Enables our server to read JSON payloads sent by a client
app.use(express.json());

// 3. Your First HTTP GET Route (Using your exact definition!)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: "Healthy", 
    message: "BeatBuddy API Server is officially live! 🎧" 
  });
});

// 4. Start the server engine and tell it to listen to our port
app.listen(PORT, () => {
  console.log(`🚀 BeatBuddy Server running on http://localhost:${PORT}`);
});
