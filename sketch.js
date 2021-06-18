let background;
let rock;
let dino;

function preload() {
  background = loadImage("background.jpg");
  dino = loadImage("dino.png");
  rock = loadImage("rock.png");
}

function setup() {
  createCanvas(1000, 1000);
  dino = new Dino();
}

function keyPressed() {
  if (key == " ") {
    dino.jump();
  }
}

function draw() {
  background(background);
  dino.show();
  dino.move();
}
