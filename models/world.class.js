class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgroundObjects = [
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/1.png",
      0
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
  ];
  canvas; //benötigt zum reclear
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas; //benötigt zum reclear
    this.draw();
  }

  draw() {
    //reclear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.character);

    //Objekte werden hinzugefügt
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.backgroundObjects);

    //draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  //wiederkehrende funktion die für die Objekte verwendet werden
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  //MoveableObject
  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
