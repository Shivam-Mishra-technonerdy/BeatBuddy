export default function MainFeed({ selectedPlaylistId, songs, loading }) {
  return (
    <main style={{
      padding: '32px',
      overflowY: 'auto',
      background: 'linear-gradient(to bottom, #1f1f1f 0%, #121212 40%)'
    }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' }}>Playlist Workspace Feed</h2>
      <p style={{ color: '#a7a7a7', fontSize: '14px', margin: '0 0 32px 0' }}>
        Streaming Room ID Row Verification Matrix: <span style={{ color: '#1DB954', fontWeight: 'bold' }}>{selectedPlaylistId}</span>
      </p>

      {loading ? (
        <p style={{ color: '#1DB954', fontWeight: 'bold' }}>Hydrating track byte arrays over network sockets... ⏳</p>
      ) : songs.length === 0 ? (
        <p style={{ color: '#a7a7a7' }}>No metadata records discovered inside this relational table partition link row.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Header Row Columns Map Label Labels */}
          <div style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1fr 80px', padding: '0 16px 8px 16px', color: '#b3b3b3', borderBottom: '1px solid #242424', fontSize: '13px' }}>
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div style={{ textAlign: 'right' }}>🕒</div>
          </div>

          {/* Songs Row Generator Maps */}
          {songs.map((item, index) => {
            const track = item.songs;
            return (
              <div
                key={item.id}
                style={{
                  display: 'grid', gridTemplateColumns: '40px 2fr 1fr 80px', alignItems: 'center',
                  padding: '12px 16px', borderRadius: '6px', backgroundColor: '#181818',
                  border: '1px solid #242424', cursor: 'pointer', transition: 'background-color 0.2s'
                }}
              >
                <div style={{ color: '#b3b3b3' }}>{index + 1}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontSize: '20px' }}>🎵</div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#FFF' }}>{track.title}</div>
                    <div style={{ fontSize: '13px', color: '#b3b3b3', marginTop: '2px' }}>{track.artist}</div>
                  </div>
                </div>
                <div style={{ color: '#b3b3b3', fontSize: '14px' }}>{track.album || 'Single'}</div>
                <div style={{ textAlign: 'right', color: '#b3b3b3', fontSize: '14px' }}>
                  {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
