// frontend-nextjs/app/page.js
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px' }}>
      <h2 style={{ color: '#ff69b4', fontSize: '2.5rem' }}>Üdv a WaveVibe oldalon!</h2>
      <p style={{ color: '#ccc', fontSize: '1.2rem' }}>
        Fedezd fel a legújabb előadókat és dalaikat!
      </p>
      <div style={{ marginTop: '30px' }}>
        <a href="/artists" style={{
          padding: '10px 20px',
          backgroundColor: '#ff69b4',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>Előadók megtekintése</a>
      </div>
    </div>
  );
}
