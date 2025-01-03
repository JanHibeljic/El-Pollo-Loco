class MoveableObject {
  x = 120;
  y = 280;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  otherDirection = false;

  // loadImage("img/test.png");
  loadImage(path) {
    this.img = new Image(); // this.img = document.getElementById("image") <img id="image" src>
    this.img.src = path;
  }

  // @param (Array arr - ["img/image1","img/image2", ...])
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img; //vorher this.imageCache.push(img); array geändert zu JSON
    });
  }

  moveRight() {
    console.log("moving right");
  }

  //Wolken bewegen sich nach links
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  playAnimation(images) {
    let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6;     1, Rest 1
    // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0

    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
}
