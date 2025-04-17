document.addEventListener("DOMContentLoaded", () => {
    const musicEl = document.querySelector("#music");
    const clickEl = document.querySelector("#click");
    const letterEl = document.querySelector(".letter");
    const balloonEl = document.querySelector(".balloon");
    const usPicEl = document.querySelector(".us");
    const us2PicEl = document.querySelector(".us2");
    const stopEl = document.querySelector(".stop");

    // function playMusic(){
      // musicEl.play();
    // }

    clickEl.addEventListener("click", () => {
      musicEl.play();
    });

    stopEl.addEventListener("click", () => {
      musicEl.pause();
    });

    usPicEl.addEventListener("click", () => {
      // letterEl.classList.toggle("flap");
      usPicEl.classList.toggle("picFlap");
    });
    us2PicEl.addEventListener("click", () => {
      // letterEl.classList.toggle("flap");
      us2PicEl.classList.toggle("picFlap");
    });


    clickEl.addEventLstener("click", playMusic);
});