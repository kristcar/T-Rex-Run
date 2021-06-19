let backgroundImg;
let rockImg;
let dinoImg;
let dino;
let rocks = [];
let soundClassifier;

function preload() {
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier("SpeechCommands18w", options);
  backgroundImg = loadImage("background2.jpg");
  dinoImg = loadImage("dino2.png");
  rockImg = loadImage("rock.png");
}

function setup() {
  createCanvas(850, 450);
  dino = new Dino();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == "up") {
    dino.jump();
  }
}

function keyPressed() {
  if (key == " ") {
    dino.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    rocks.push(new Rock());
  }

  background(backgroundImg);

  for (let rock of rocks) {
    rock.move();
    rock.show();

    if (dino.hits(rock)) {
      console.log("Game Over!");
      noLoop();
    }
  }

  dino.show();
  dino.move();
}
