"use client"; // ez kell a kliens oldali interaktivitáshoz
import { useState } from "react";

const backendUrl = 'http://localhost:3001';
const defaultImage = '/assets/default.jpg';

export default function ArtistCard({ artist }) {
  const [hover, setHover] = useState(false);

  const imageSource = artist.imageFile && artist.imageFile.trim() !== ''
    ? `${backendUrl}/assets/${artist.imageFile}`
    : `${backendUrl}${defaultImage}`;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        backgroundColor: '#2a2a3a',
        transform: hover ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.2s'
      }}
    >
      <img
        src={imageSource}
        alt={artist.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '15px', textAlign: 'center' }}>
        <h3 style={{ color: '#ff69b4', margin: '10px 0 5px' }}>{artist.name}</h3>
        <p style={{ color: '#ccc', margin: 0 }}>{artist.genre}</p>
      </div>
    </div>
  );
}
    </div>
  );
}
>>>>>>> bc408db (javitva next.js-re)
