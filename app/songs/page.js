<<<<<<< HEAD
const backendUrl = 'http://localhost:3001';

async function getSongs() {
  const res = await fetch(`${backendUrl}/songs`, { cache: 'no-store' });
  if(!res.ok) throw new Error('Hiba a backendről');
  return res.json();
}

export default async function SongPage() {
  const songs = await getSongs();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#ff69b4', marginBottom: '30px' }}>🎶 Dalok</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songs.map(s => (
          <li key={s.id} style={{
            padding: '15px',
            borderRadius: '6px',
            margin: '10px 0',
            backgroundColor: '#2a2a3a',
            border: '1px solid #ff69b4',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
          }}>
            <strong style={{ color: '#ff69b4' }}>{s.title}</strong> – {s.artist} ({s.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
=======
const backendUrl = 'http://localhost:3001';

async function getSongs() {
  const res = await fetch(`${backendUrl}/songs`, { cache: 'no-store' });
  if(!res.ok) throw new Error('Hiba a backendről');
  return res.json();
}

export default async function SongPage() {
  const songs = await getSongs();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#ff69b4', marginBottom: '30px' }}>🎶 Dalok</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songs.map(s => (
          <li key={s.id} style={{
            padding: '15px',
            borderRadius: '6px',
            margin: '10px 0',
            backgroundColor: '#2a2a3a',
            border: '1px solid #ff69b4',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
          }}>
            <strong style={{ color: '#ff69b4' }}>{s.title}</strong> – {s.artist} ({s.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> bc408db (javitva next.js-re)
