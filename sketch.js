var bg, bg2, form, system, code, security;
var score = 0;

function preload() {
  bg = loadImage("closed_bank_vault.png");
  bg2 = loadImage("open_bank_vault.png");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("VAULT OPENED",350, 265);
  }

  drawSprites();
}
