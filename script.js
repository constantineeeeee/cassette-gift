document.addEventListener("DOMContentLoaded", () => {
    const musicEl = document.querySelector("#music");
    const clickEl = document.querySelector("#click");
    const letterEl = document.querySelector(".letter");
    const balloonEl = document.querySelector(".balloon");
    const usPicEl = document.querySelector(".uss");
    const us2PicEl = document.querySelector(".us2");
    const stopEl = document.querySelector(".stop");

    musicEl.preload = "auto";

    clickEl.addEventListener("click", () => {
      musicEl.play();
    });

    stopEl.addEventListener("click", () => {
      musicEl.pause();
    });

    usPicEl.addEventListener("click", () => {
      usPicEl.classList.toggle("picFlap");
    });
    us2PicEl.addEventListener("click", () => {
      us2PicEl.classList.toggle("picFlap");
    });
});