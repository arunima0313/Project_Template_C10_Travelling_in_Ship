var sea;
var ship, ship_movingImage;
var seaImage;

function preload(){
seaImage = loadImage ("sea.png");
ship_movingImage = loadAnimation("ship-1.png","ship-2.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);

  ship = createSprite(200,300,50,10);
  ship.addAnimation("ship",ship_movingImage);
}

function draw() {
  background("blue");
 
sea.velocityX = -2;

if(sea.x < 0){
sea.x = sea.width / 2;
}
ship.scale = 0.2;
console.log(sea.x);

  drawSprites();
}