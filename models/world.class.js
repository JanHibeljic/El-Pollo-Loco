class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgroundObjects = [
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/air.png",
      -719
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
      -719
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
      -719
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
      -719
    ),

    new BackgroundObject("img_pollo_locco/img/5_background/layers/air.png", 0),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/1.png",
      0
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/2_second_layer/1.png",
      0
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/1_first_layer/1.png",
      0
    ),

    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/air.png",
      719
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
      719
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
      719
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
      719
    ),

    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/air.png",
      1438
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/1.png",
      1438
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/2_second_layer/1.png",
      1438
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/1_first_layer/1.png",
      1438
    ),

    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/air.png",
      2157
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/3_third_layer/2.png",
      2157
    ), // y wird nicht mehr übergeben für die höhe sondern im jeweiligen Objekt berechnet und übergeben
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/2_second_layer/2.png",
      2157
    ),
    new BackgroundObject(
      "img_pollo_locco/img/5_background/layers/1_first_layer/2.png",
      2157
    ),
  ];
  canvas; //benötigt zum reclear
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas; //benötigt zum reclear
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    //reclear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //camera wird links verschoben
    this.ctx.translate(this.camera_x, 0);

    //Objekte werden hinzugefügt
    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);

    //camera wurde links verschoben, die Elemente gezeichnet, dann drehen wir die cameraverschiebung -> fängt wieder oben beim links verschieben an
    this.ctx.translate(-this.camera_x, 0);

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
    //wenn otherDirection = true, dann speichert wir die einstellungen vom context, dann verändern wir die methode wie wir die bilder einfügen und drehen es (spiegeln)
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0); // x-achse wird gespiegelt (NULL ist rechts oben anstatt links oben)
      this.ctx.scale(-1, 1); // ohne diesen befehl springt das objekt beim spiegeln bei richtungsänderung, deswegen verschieben wir die um die Breite des Elements
      mo.x = mo.x * -1; // deswegen einmal x achse drehen
    }

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    //wenn otherDirection = true , dann alles rückgängig machen
    if (mo.otherDirection) {
      mo.x = mo.x * -1; // deswegen einmal x achse drehen
      this.ctx.restore();
    }
  }
}
