import { useState, useEffect } from 'react';
import TopBar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainFeed from './components/MainFeed.jsx';
import PlayerBar from './components/Playerbar.jsx';

function App() {
  // 1. DYNAMIC STATE CONFIGURATION (Pure empty RAM buffers waiting for cloud data)
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const [playlists, setPlaylists] = useState([]); // Real live playlists pipeline state
  const [songs, setSongs] = useState([]); // Real live matching tracks pipeline state
  const [loading, setLoading] = useState(false);

  // 2. UNIFIED LIFECYCLE NETWORK INTERCEPTOR (Hydrates your layout from Port 5000 streams)
  useEffect(() => {
    const fetchFullApplicationData = async () => {
      setLoading(true);
      try {
        // Asynchronously stream all existing master playlist container layouts out of our database
        const playlistResponse = await fetch('http://localhost:5000/api/playlists');
        const playlistData = await playlistResponse.json();
        setPlaylists(playlistData);

        // Asynchronously stream the deeply nested song models mapping for the selected view context
        const songsResponse = await fetch(`http://localhost:5000/api/playlists/${selectedPlaylistId}`);
        const songsData = await songsResponse.json();
        setSongs(songsData.playlist_songs || []);
      } catch (error) {
        console.error("❌ First-principles full-stack data hydration exception:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFullApplicationData();
  }, [selectedPlaylistId]); // Dual-stream query triggers seamlessly whenever ID coordinates drift

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '240px 1fr', 
      gridTemplateRows: '64px calc(100vh - 64px - 90px) 90px', 
      height: '100vh',
      width: '100vw',
      backgroundColor: '#121212', 
      color: '#FFFFFF',
      fontFamily: 'sans-serif',
      overflow: 'hidden' 
    }}>
      
      {/* 1. TOP BAR COMPONENT */}
      <TopBar />

      {/* 2. LEFT SIDEBAR COMPONENT (Now fully wired to live cloud playlist data packets) */}
      <Sidebar 
        mockPlaylists={playlists} // Passing our live playlists state variable array directly down!
        selectedPlaylistId={selectedPlaylistId}
        onSelectPlaylist={setSelectedPlaylistId} 
      />

      {/* 3. CENTRAL MAIN VIEWER FEED */}
      <MainFeed 
        selectedPlaylistId={selectedPlaylistId}
        songs={songs}
        loading={loading}
      />

      {/* 4. BOTTOM FLOATING AUDIO CONTROLLER */}
      <PlayerBar />

    </div>
  );
}

export default App;
