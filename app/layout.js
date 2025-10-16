// frontend-nextjs/app/layout.js
import './globals.css';

export const metadata = {
  title: 'WaveVibe',
  description: 'Zenei előadók és dalok',
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body style={{
        margin: 0,
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: '#1a1a2e',
        color: '#fff'
      }}>
        <header style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#2a2a3a',
          borderBottom: '2px solid #ff69b4'
        }}>
          <h1 style={{ color: '#ff69b4', margin: 0 }}>🎧 WaveVibe</h1>
          <nav style={{ marginTop: '10px' }}>
            <a href="/artists" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Előadók</a>
            <a href="/songs" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Dalok</a>
          </nav>
        </header>
        <main style={{ padding: '20px' }}>{children}</main>
        <footer style={{
          textAlign: 'center',
          padding: '15px',
          marginTop: '40px',
          backgroundColor: '#2a2a3a',
          borderTop: '2px solid #ff69b4'
        }}>
          © 2025 WaveVibe
        </footer>
      </body>
    </html>
  );
}
