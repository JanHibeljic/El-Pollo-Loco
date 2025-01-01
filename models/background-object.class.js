class BackgroundObject extends MoveableObject {
  width = 720;
  height = 480; // gesamte Höhe vom canvas = 480

  constructor(imagePath, x, y) {
    //y wird in () entfernt und nicht übergeben sondern jetzt berechnet
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height; //480-400=80
  }
}
