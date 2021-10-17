const anchor = document.getElementById("anchor");
const ios = document.getElementById("ios");
const btnBox = document.getElementById("btnBox");

const audioFiles = ["audio/funny-tiger.mp3"];

let sound = null;
let isIOS = null;
let isPlaying = false;

// Load btn with default sound track
let btn = createButton(audioFiles[0]);

if (/webOS|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  btnBox.appendChild(btn);
  isIOS = true;
} else {
  sound = new Audio("chris-gilbert-laugh.mp3");
}

console.log(isPlaying);

anchor.addEventListener("markerFound", async (e) => {
  if (!isPlaying) {
    const randomNumber = randomInteger(0, audioFiles.length - 1);
    sound.src = audioFiles[randomNumber];

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
