// Mood-based songs database
const songsDatabase = {
  happy: [
    { name: "Kashmir to Main", artist: "Arijit Singh", url: "https://www.youtube.com/watch?v=WxtJqyIyThU" },
    { name: "New Punjabi", artist: "We Happy", url: "https://www.youtube.com/watch?v=n3mJ9b6l33E" },
    { name: "Non-Stop Happy", artist: "Ronson ft. Bruno Mars", url: "https://www.youtube.com/watch?v=4mdFCoG4Uko" },
  ],
  sad: [
    { name: "Thode Jagah De Do", artist: "Arijit Singh", url: "https://www.youtube.com/watch?v=1BKbzZhvUAI" },
    { name: "Agar Tum Saath Ho", artist: "Arijit Singh", url: "https://www.youtube.com/watch?v=xRb8hxwN5zc" },
    { name: "Ve Kamliya", artist: "Arijit Singh", url: "https://www.youtube.com/watch?v=xDAQJ_OedGk" },
  ],
  energetic: [
    { name: "Eye of the Tiger", artist: "Survivor", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    { name: "Stronger", artist: "Kanye West", url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" },
    { name: "Don't Stop Me Now", artist: "Queen", url: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  ],
  relaxed: [
    { name: "Shree Hari Strotram", artist: "Unknown", url: "https://www.youtube.com/watch?v=xFbaXENN850" },
    { name: "Namami Samisha", artist: "Unknown", url: "https://www.youtube.com/watch?v=bukN2P7WpwE" },
    { name: "Better Together", artist: "Jack Johnson", url: "https://www.youtube.com/watch?v=UaWTtHjniG8" },
  ],
};

// Analyze mood (mock analysis)
function analyzeMood(text) {
  text = text.toLowerCase();

  if (text.includes("happy") || text.includes("great") || text.includes("excited")) return "happy";
  if (text.includes("sad") || text.includes("down") || text.includes("cry")) return "sad";
  if (text.includes("energetic") || text.includes("strong") || text.includes("powerful")) return "energetic";
  if (text.includes("calm") || text.includes("relaxed") || text.includes("peaceful")) return "relaxed";

  return "unknown";
}

// Display songs based on mood
function displaySongs(mood) {
  const songsContainer = document.getElementById("songs");
  const resultSection = document.getElementById("result");
  songsContainer.innerHTML = "";

  // Show the result section
  resultSection.classList.add("show");

  if (mood === "unknown") {
    songsContainer.innerHTML = `<p>Sorry, I couldn't identify your mood. Try describing it differently!</p>`;
    return;
  }

  // Get songs for the identified mood
  const songs = songsDatabase[mood];

  // Display songs
  songs.forEach((song) => {
    songsContainer.innerHTML += `
      <div>
        <p><strong>${song.name}</strong> by ${song.artist}</p>
        <a href="${song.url}" target="_blank">Listen</a>
      </div>
    `;
  });
}

// Event Listener for Analyze Button
document.getElementById("analyzeMood").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  if (!userInput.trim()) {
    alert("Please enter how you feel.");
    return;
  }

  // Analyze the mood and display songs
  const mood = analyzeMood(userInput);
  document.getElementById("mood").textContent = mood;
  displaySongs(mood);
});


script.js

