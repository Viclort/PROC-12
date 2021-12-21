var seaImg;
var sea;
var ship, shipImg

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 200, 200);
  sea.addImage(seaImg);
  sea.velocityX = -4

  ship = createSprite(125, 270, 50, 20);
  ship.addAnimation("sailing", shipImg);
  ship.scale = 0.3
  sea.x = sea.width/2;
  if (sea.x >0){
    sea.x=sea.width/2;
  }
}

function draw() {
  background("blue");
  drawSprites();
}