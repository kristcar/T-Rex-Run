class Dino {
  constructor() {
    this.r = 200;
    this.x = 50;
    this.y = height - this.r;
    this.gravity = 1.5;
    this.up = 0;
  }

  jump() {
    if (this.y == height - this.r) {
      this.up = -27;
    }
  }

  hits(rock) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = rock.x + rock.r * 0.5;
    let y2 = rock.y + rock.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, rock.r);
  }

  move() {
    this.y += this.up;
    this.up += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(dinoImg, this.x, this.y, this.r, this.r);
  }
}
