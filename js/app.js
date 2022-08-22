import musicCards from "./components/MusicCards/index.js";

const audio = document.querySelector("#audio");
const musicTimeRange = document.getElementById("music-time-range");
const musicProgressBar = document.querySelector(".music-progress-bar");

musicCards()

musicTimeRange.addEventListener("change", (e) => {
  audio.currentTime = e.target.value;
  const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
  musicProgressBar.style.width = musicProgressBarWidth + "%";
});
