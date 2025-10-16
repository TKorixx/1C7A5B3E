"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const backendUrl = 'http://localhost:3001';

export default function ArtistForm() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [info, setInfo] = useState(''); // új state a leírásnak
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('genre', genre);
    formData.append('info', info); // elküldjük a leírást
    if(file) formData.append('artistImage', file);

    try {
      const res = await fetch(`${backendUrl}/artists`, { method: 'POST', body: formData });
      if(res.ok) {
        alert('Előadó hozzáadva!');
        router.refresh();
        setName(''); setGenre(''); setInfo(''); setFile(null);
        e.target.reset();
      } else {
        const data = await res.json();
        alert(data.message);
      }
    } catch(err) {
      alert('Hiba a backend kapcsolatnál.');
    } finally { setIsSubmitting(false); }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', gap: '15px',
      backgroundColor: '#2a2a3a', padding: '20px', borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
    }}>
      <h3 style={{ color: '#ff69b4', margin: 0 }}>➕ Új előadó</h3>
      <input type="text" placeholder="Előadó neve" value={name} onChange={e => setName(e.target.value)} required
        style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#3a3a4e', color: '#fff' }}/>
      <input type="text" placeholder="Műfaj" value={genre} onChange={e => setGenre(e.target.value)} required
        style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#3a3a4e', color: '#fff' }}/>
      <textarea
        placeholder="Leírás az előadóról"
        value={info}
        onChange={e => setInfo(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ff69b4',
          backgroundColor: '#3a3a4e',
          color: '#fff',
          minHeight: '80px'
        }}
      />
      <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ff69b4', backgroundColor: '#3a3a4e', color: '#fff' }}/>
      <button type="submit" disabled={isSubmitting}
        style={{ padding: '10px', backgroundColor: '#ff69b4', border: 'none', borderRadius: '4px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
        {isSubmitting ? 'Feltöltés...' : '➕ Hozzáadás'}
      </button>
    </form>
  );
}
