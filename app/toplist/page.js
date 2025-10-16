// frontend-nextjs/app/toplist/page.js
"use client";
import { useState } from "react";

const toplistData = [
  {
    artist: "Azahriah",
    songs: ["Top 1 - Rampapapam", "Top2 - Four Moods", "Top3 - Filter"],
    videoUrl: "https://www.youtube.com/embed/SHTqyvPB78E?list=RDSHTqyvPB78E&start_radio=1"
  },
  {
    artist: "Desh",
    songs: ["Top 1 - Mokka", "Top2 - Apály", "Top3 - Strawbery"],
    videoUrl: "https://www.youtube.com/embed/RT00oAdUmYc?list=RDRT00oAdUmYc&start_radio=1"
  },
  {
    artist: "T. Danny",
    songs: ["Top 1 - Pletyka", "Top2 - Szörnyeteg", "Top3 - Fura vagyok én"],
    videoUrl: "https://www.youtube.com/embed/B8wL1GIDcm4?list=RDB8wL1GIDcm4"
  },
   {
    artist: "Bruno X Spacc",
    songs: ["Top 1 - Afterpaty", "Top2 - Fiatal bajnokok", "Top3 - Vakmeleg"],
    videoUrl: "https://www.youtube.com/embed/EePoS6COqYs"
  },
];

export default function ToplistPage() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingBottom: "40px" }}>
      <h2 style={{ textAlign: "center", color: "#ff69b4", marginBottom: "30px" }}>🏆 Toplistás zenék</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        {toplistData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              backgroundColor: "#2a2a3a",
              border: "1px solid #ff69b4",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              padding: "15px",
              transition: "transform 0.2s",
              transform: hoverIndex === index ? "scale(1.03)" : "scale(1)"
            }}
          >
            <h3 style={{ color: "#ff69b4", marginBottom: "10px" }}>{item.artist}</h3>
            <ul style={{ color: "#ccc", paddingLeft: "15px", marginBottom: "10px" }}>
              {item.songs.map((song, i) => (
                <li key={i}>{song}</li>
              ))}
            </ul>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src={item.videoUrl}
                title={`${item.artist} videó`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
