
import ArtistForm from './ArtistForm';
import ArtistCard from './ArtistCard';

const backendUrl = 'http://localhost:3001';

async function getArtists() {
  const res = await fetch(`${backendUrl}/artists`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Hiba a backend elérésekor!');
  return res.json();
}

export default async function ArtistPage() {
  const artists = await getArtists();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#ff69b4', marginBottom: '30px' }}>Előadók</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {artists.map(a => (
          <ArtistCard key={a.id} artist={a} />
        ))}
      </div>

      <hr style={{ borderColor: '#ff69b4', margin: '40px 0' }}/>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <ArtistForm />
      </div>
    </div>
  );
}
