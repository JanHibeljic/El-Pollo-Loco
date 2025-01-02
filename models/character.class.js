class Character extends MoveableObject {
  height = 260;
  y = 170;

  constructor() {
    super().loadImage("img_pollo_locco/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages([
      "img_pollo_locco/img/2_character_pepe/2_walk/W-21.png",
      "img_pollo_locco/img/2_character_pepe/2_walk/W-22.png",
      "img_pollo_locco/img/2_character_pepe/2_walk/W-23.png",
      "img_pollo_locco/img/2_character_pepe/2_walk/W-24.png",
      "img_pollo_locco/img/2_character_pepe/2_walk/W-25.png",
      "img_pollo_locco/img/2_character_pepe/2_walk/W-26.png",
    ]);
  }
  jump() {}
}
