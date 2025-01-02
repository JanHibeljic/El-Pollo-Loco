let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  console.log("my character is", world.character);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) {
    //right arrow
    keyboard.RIGHT = true;
  }
  if (e.keyCode === 37) {
    //left arrow
    keyboard.LEFT = true;
  }
  if (e.keyCode === 38) {
    //up arrow
    keyboard.UP = true;
  }
  if (e.keyCode === 40) {
    //down arrow
    keyboard.DOWN = true;
  }
  if (e.keyCode === 32) {
    //space
    keyboard.SPACE = true;
  }
});

window.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.keyCode === 39) {
    //right arrow
    keyboard.RIGHT = false;
  }
  if (e.keyCode === 37) {
    //left arrow
    keyboard.LEFT = false;
  }
  if (e.keyCode === 38) {
    //up arrow
    keyboard.UP = false;
  }
  if (e.keyCode === 40) {
    //down arrow
    keyboard.DOWN = false;
  }
  if (e.keyCode === 32) {
    //space
    keyboard.SPACE = false;
  }
});
