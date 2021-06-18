let backgroundImg;
let rockImg;
let dinoImg;
let dino;

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
  background(backgroundImg);
  dino.show();
  dino.move();
}
