function createButton(track) {
  let btn = document.createElement("button");
  btn.innerText = "Sound Off";
  btn.style.padding = "1rem";
  btn.style.color = "white";
  btn.style.background = "red";
  btn.style.borderRadius = "10px";
  btn.style.border = "none";
  btn.id = "sound";
  btn.addEventListener("click", (e) => {
    // create the audio object on user interaction
    console.log("click");
    sound = new Audio(track);

    if (e.target.outerText === "Sound Off") {
      btn.innerText = "Sound On";
      btn.style.background = "blue";
    }
  });

  return btn;
}

function playSound(audio) {
  return new Promise((res) => {
    audio.play();
    audio.onended = res;
  });
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
