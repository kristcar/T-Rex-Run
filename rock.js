class Rock {
  constructor() {
    this.x = width;
    this.r = 60;
    this.y = height - this.r;
  }

  move() {
    this.x -= 8;
  }

  show() {
    image(rockImg, this.x, this.y, this.r, this.r);
  }
}
