// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
  let audioKeyCode = getKeyCode(event);

  //typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  const cantFoundAnyKey = !key;

  if (cantFoundAnyKey) {
    return;
  }

  addPlayClass(key)
  playAudio(audioKeyCode)
}

function addPlayClass(key) {
  key.classList.add('playing')

}

function getKeyCode(event) {
  let keyCode;

  const isKeyBoard = event.type === "keydown";

  if (isKeyBoard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayClass(event) {
  event.target.classList.remove("playing")
}


keys.forEach(function (key) {
  key.addEventListener("click", playNote);

  key.addEventListener("transitionend", removePlayClass);
});

window.addEventListener("keydown", playNote);
