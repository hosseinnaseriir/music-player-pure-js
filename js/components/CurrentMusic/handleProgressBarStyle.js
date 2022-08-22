const currentTime = document.querySelector(".current-time");
const musicProgressBar = document.querySelector(".music-progress-bar");
import { cleanTime } from "../../utils/cleanTime.js";
const musicTimeRange = document.getElementById("music-time-range");

function handleProgressBarStyle(audio) {
  musicTimeRange.max = audio.duration;
  setInterval(() => {
    currentTime.innerHTML = cleanTime(audio.currentTime);
    const musicProgressBarWidth = (audio.currentTime / audio.duration) * 100;
    musicProgressBar.style.width = musicProgressBarWidth + "%";
  }, 1000);
}

export default handleProgressBarStyle;
