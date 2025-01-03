class Endboss extends MoveableObject {
  y = 40;
  height = 400;
  width = 300;
  IMAGES_WALKING = [
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G1.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G2.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G3.png",
    "img_pollo_locco/img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);

    this.loadImages(this.IMAGES_WALKING);

    this.x = 700;

    this.speed = +Math.random() * 0.5;

    this.animate();
  }

  animate() {
    this.moveLeft();

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200); //ms
  }
}
