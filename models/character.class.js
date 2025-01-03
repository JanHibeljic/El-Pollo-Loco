class Character extends MoveableObject {
  height = 260;
  y = 170;
  speed = 6;
  IMAGES_WALKING = [
    "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
    "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
  ];
  world;
  walking_sound = new Audio("audio/walking_on_sand.mp3");

  constructor() {
    super().loadImage("img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");

    this.loadImages(this.IMAGES_WALKING);

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      //walk on canvas
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.walking_sound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walking_sound.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //walkanimation
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6;     1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0
        let path = this.IMAGES_WALKING[i]; // anstatt [i] war vorher [this.currentImage]
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50); //ms
  }

  jump() {}
}
