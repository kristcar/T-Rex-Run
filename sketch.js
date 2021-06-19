let backgroundImg;
let rockImg;
let dinoImg;
let dino;
let rocks = [];

function preload() {
  backgroundImg = loadImage("background.jpg");
  dinoImg = loadImage("dino.png");
  rockImg = loadImage("rock.png");
}

function setup() {
  createCanvas(600, 450);
  dino = new Dino();
}

function keyPressed() {
  if (key == " ") {
    dino.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    rocks.push(new Rock());
  }

  background(backgroundImg);
  dino.show();
  dino.move();

  for (let rock of rocks) {
    rock.move();
    rock.show();
  }
}
