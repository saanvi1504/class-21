var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 390, 50, 50);
  movingRect = createSprite(400,10,70,90);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  fixedRect.velocityY = -3;
  movingRect.velocityY = 3;
}

function draw() {
  background(150);
  bounceOff(movingRect, fixedRect);  
  drawSprites();
}
