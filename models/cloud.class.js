class Cloud extends MoveableObject {
  y = 20;
  height = 280;
  width = 500;
  constructor() {
    super().loadImage("img_pollo_locco/img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 500;
  }
}
