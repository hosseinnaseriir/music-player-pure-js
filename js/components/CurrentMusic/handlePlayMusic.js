const musicsContainer = document.querySelector(".musics-container");
import { cleanTime } from "./../../utils/cleanTime.js";
import handlePlayPauseUI from "./handlePlayPauseUI.js";
import handleProgressBarStyle from "./handleProgressBarStyle.js";
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const currentMusicCover = document.querySelector(".current-music-cover");
const currentMusicSinger = document.querySelector(".current-music-singer");
const currentMusictitle = document.querySelector(".current-music-title");
const playIcon = document.querySelector("#play-icon");
const coverPlayButton = document.querySelector(".cover-play-button");
const currentTime = document.querySelector(".current-time");
const fullTime = document.querySelector(".full-time");
const musicTimeRange = document.getElementById("music-time-range");
const musicProgressBar = document.querySelector(".music-progress-bar");

const handlePlayMusic = (audio) => {
  audio.play().then(() => {
    handleProgressBarStyle(audio)
    fullTime.innerHTML = cleanTime(audio.duration);
    handlePlayPauseUI(audio)
  });
};

export default handlePlayMusic;
