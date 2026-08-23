export default function Topbar() {
  return (
    <header style={{
      gridColumn: '1 / span 2', // Stretch across entire width of both grid columns
      backgroundColor: '#000000',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      borderBottom: '1px solid #1a1a1a'
    }}>
      {/* Brand Identity Branding Panel */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '22px' }}>🎧</span>
        <h1 style={{ color: '#1DB954', fontSize: '20px', margin: 0, fontWeight: 'bold', letterSpacing: '-0.5px' }}>BeatBuddy</h1>
      </div>

      {/* Central Input Navigation Chamber */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '400px' }}>
        <button style={{
          background: '#121212', border: 'none', color: '#FFF', borderRadius: '50%', 
          width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          🏠
        </button>
        <div style={{ position: 'relative', width: '100%' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
          <input 
            type="text" 
            placeholder="What do you want to play?" 
            style={{
              width: '100%', padding: '12px 12px 12px 40px', borderRadius: '24px', 
              background: '#242424', border: '1px solid transparent', color: '#FFF', fontSize: '14px', outline: 'none'
            }}
          />
        </div>
      </div>

      {/* Profile and Notification Corner Anchor Packs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{ background: 'none', border: 'none', color: '#b3b3b3', fontSize: '20px', cursor: 'pointer' }}>🔔</button>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1DB954',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px', color: '#FFF', cursor: 'pointer'
        }}>
          S
        </div>
      </div>
    </header>
  );
}
