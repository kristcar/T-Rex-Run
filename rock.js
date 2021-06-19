class Rock {
  constructor() {
    this.x = width;
    this.r = 100;
    this.y = height - this.r;
  }

  move() {
    this.x -= 2;
  }

  show() {
    image(rockImg, this.x, this.y, this.r, this.r);
  }
}
