// Select the audio element and play/pause button
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const playPauseIcon = document.getElementById("play-pause-icon");


playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("bx-play");
    playPauseIcon.classList.add("bx-pause");
  } else {
    audio.pause();
    playPauseIcon.classList.remove("bx-pause");
    playPauseIcon.classList.add("bx-play");
  }
});

// Optional: Reset the icon when the audio ends
audio.addEventListener("ended", () => {
  playPauseIcon.classList.remove("bx-pause");
  playPauseIcon.classList.add("bx-play");
});