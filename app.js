const backendUrl = "http://localhost:3000";

async function loadArtists() {
  const res = await fetch(`${backendUrl}/artists`);
  const data = await res.json();
  const list = document.getElementById("artistList");
  list.innerHTML = "";
  data.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `${a.name} – ${a.genre}`;
    list.appendChild(li);
  });
}

async function loadSongs() {
  const res = await fetch(`${backendUrl}/songs`);
  const data = await res.json();
  const list = document.getElementById("songList");
  list.innerHTML = "";
  data.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.title} – ${s.artist} (${s.year})`;
    list.appendChild(li);
  });
}

document.getElementById("songForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const artist = document.getElementById("artist").value;
  const title = document.getElementById("title").value;

  await fetch(`${backendUrl}/songs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ artist, title, year: 2025 })
  });

  document.getElementById("artist").value = "";
  document.getElementById("title").value = "";
  loadSongs();
});

loadArtists();
loadSongs();
