class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
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

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );
    //jeder enemy wird einzeln gezeichnet also 3xchicken
    this.enemies.forEach((enemy) => {
      this.ctx.drawImage(
        enemy.img,
        enemy.x,
        enemy.y,
        enemy.width,
        enemy.height
      );
    });
    //draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
