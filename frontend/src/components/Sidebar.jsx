export default function Sidebar({ mockPlaylists, selectedPlaylistId, onSelectPlaylist }) {
  return (
    <aside style={{
      backgroundColor: '#000000',
      padding: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      borderRight: '1px solid #1a1a1a'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontWeight: 'bold', cursor: 'pointer', color: '#FFF' }}>
          <span style={{ fontSize: '20px' }}>📚</span> Your Library
        </div>
        <button style={{
          width: '100%', padding: '10px', borderRadius: '20px', backgroundColor: '#242424',
          color: '#FFF', border: 'none', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', fontSize: '13px'
        }}>
          ➕ Create Playlist
        </button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #242424', margin: 0 }} />

      {/* Target Render Core Loop */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
        <h4 style={{ color: '#727272', fontSize: '12px', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>Playlists</h4>
        {mockPlaylists.map((playlist) => {
          const isSelected = playlist.id === selectedPlaylistId;
          return (
            <div
              key={playlist.id}
              onClick={() => onSelectPlaylist(playlist.id)} // Firing callback up to update parent RAM state!
              style={{
                padding: '8px 12px', borderRadius: '4px', cursor: 'pointer',
                backgroundColor: isSelected ? '#1a1a1a' : 'transparent',
                color: isSelected ? '#1DB954' : '#b3b3b3',
                fontWeight: isSelected ? 'bold' : 'normal',
                transition: 'all 0.2s ease'
              }}
            >
              📁 {playlist.name}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
