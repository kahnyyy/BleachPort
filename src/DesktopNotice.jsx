export default function DesktopNotice() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#04060f',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '32px',
      fontFamily: "'Anton', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@300;400&display=swap');
        .dn-root { display: none; }
        @media (max-width: 900px) { .dn-root { display: flex; } }
      `}</style>

      <div className="dn-root" style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: '#04060f',
        flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '32px', gap: '24px',
        textAlign: 'center',
      }}>
        {/* Icon */}
        <div style={{ fontSize: 64, lineHeight: 1, marginBottom: 8 }}>🖥️</div>

        {/* Title */}
        <div style={{
          fontFamily: "'Anton', sans-serif",
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 10vw, 56px)',
          color: '#ffffff',
          letterSpacing: 3,
          lineHeight: 0.9,
        }}>
          DESKTOP<br/>ONLY
        </div>

        {/* Divider */}
        <div style={{
          width: 60, height: 3,
          background: 'linear-gradient(to right, #7b2fd4, #c4001a)',
          borderRadius: 2,
        }} />

        {/* Message */}
        <p style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(14px, 4vw, 18px)',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: 1,
          lineHeight: 1.6,
          maxWidth: 320,
        }}>
          This portfolio is designed for desktop viewing. Please visit on a larger screen for the full experience.
        </p>

        {/* URL hint */}
        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 13,
          letterSpacing: 2,
          color: 'rgba(255,255,255,0.2)',
          marginTop: 8,
        }}>
          kahny.vercel.app
        </div>
      </div>
    </div>
  );
}