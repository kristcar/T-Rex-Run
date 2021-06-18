class Dino {
  constructor() {
    this.r = 150;
    this.x = 50;
    this.y = height - 50;
    this.gravity = 2;
    this.up = 0;
  }

  jump() {
    this.up = -25;
  }

  move() {
    this.y += this.up;
    this.up += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(dino, this.x, this.y, this.r, this.r);
  }
}
