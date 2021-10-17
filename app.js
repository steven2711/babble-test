const tigerAnchor = document.getElementById("tigerAnchor");
const miyaAnchor = document.getElementById("miyaAnchor");
const animeAnchor = document.getElementById("animeAnchor");
const ios = document.getElementById("ios");
const btnBox = document.getElementById("btnBox");

const tigerFiles = ["audio/funny-tiger.mp3"];
const miyaFiles = ["audio/omgmiya.mp3"];
const animeFiles = ["audio/ohno.mp3"];

let sound = null;
let isIOS = null;
let isPlaying = false;

// Load btn with default sound track
let btn = createButton(tigerFiles[0]);

if (/webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btnBox.appendChild(btn);
  isIOS = true;
} else {
  sound = new Audio("chris-gilbert-laugh.mp3");
}

tigerAnchor.addEventListener("markerFound", async (e) => {
  if (!isPlaying) {
    const randomNumber = randomInteger(0, tigerFiles.length - 1);
    sound.src = tigerFiles[randomNumber];

    if (isIOS && btn.innerText === "Sound On") {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    } else if (!isIOS) {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    }
  }
});

miyaAnchor.addEventListener("markerFound", async (e) => {
  if (!isPlaying) {
    const randomNumber = randomInteger(0, miyaFiles.length - 1);
    sound.src = miyaFiles[randomNumber];

    if (isIOS && btn.innerText === "Sound On") {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    } else if (!isIOS) {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    }
  }
});

animeAnchor.addEventListener("markerFound", async (e) => {
  if (!isPlaying) {
    const randomNumber = randomInteger(0, animeFiles.length - 1);
    sound.src = animeFiles[randomNumber];

    if (isIOS && btn.innerText === "Sound On") {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    } else if (!isIOS) {
      isPlaying = true;
      const test = await playSound(sound);

      if (test.type === "ended") {
        isPlaying = false;
      }
    }
  }
});

// ios user event workaround
// you have to initiate a user event before having access to the Audio context
// solved by creating a button for ios users to press
