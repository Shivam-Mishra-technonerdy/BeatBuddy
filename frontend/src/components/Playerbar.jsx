export default function Playerbar() {
  return (
    <footer style={{
      gridColumn: '1 / span 2', // Anchor pack layout stretches horizontally across the screen matrix
      backgroundColor: '#181818',
      borderTop: '1px solid #242424',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px'
    }}>
      {/* Column Package 1: Playback Track Information Panel */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '30%' }}>
        <div style={{ fontSize: '28px', backgroundColor: '#282828', width: '56px', height: '56px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎧</div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#FFF', fontSize: '14px' }}>No Track Selected</div>
          <div style={{ fontSize: '12px', color: '#b3b3b3', marginTop: '3px' }}>Choose a stream link</div>
        </div>
      </div>

      {/* Column Package 2: Operational Hardware Audio Deck Mechanics Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', width: '40%' }}>
        {/* Playback Control Deck Deck Core Buttons Map */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button style={{ background: 'none', border: 'none', color: '#b3b3b3', fontSize: '18px', cursor: 'pointer' }}>⏮️</button>
          <button style={{
            background: '#FFF', border: 'none', color: '#000', width: '38px', height: '38px', 
            borderRadius: '50%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            ▶️
          </button>
          <button style={{ background: 'none', border: 'none', color: '#b3b3b3', fontSize: '18px', cursor: 'pointer' }}>⏭️</button>
        </div>

        {/* Dynamic Timing Strip Interface Rail */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', fontSize: '11px', color: '#a7a7a7' }}>
          <div>0:00</div>
          <div style={{ flexGrow: 1, height: '4px', backgroundColor: '#4f4f4f', borderRadius: '2px', cursor: 'pointer', position: 'relative' }}>
            <div style={{ width: '0%', height: '100%', backgroundColor: '#FFF', borderRadius: '2px' }}></div>
          </div>
          <div>0:00</div>
        </div>
      </div>

      {/* Column Package 3: Hardware System Volume Slider Controls Deck */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '30%', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '16px', opacity: 0.7 }}>🔊</span>
        <input 
          type="range" 
          min="0" 
          max="100" 
          defaultValue="70"
          style={{ width: '100px', accentColor: '#FFF', cursor: 'pointer', height: '4px' }}
        />
      </div>
    </footer>
  );
}
