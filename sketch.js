var fixedRect, movingRect, moving1, moving2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  moving1 = createSprite(200,200,30,30);
  moving2 = createSprite(100,200,30,30);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  moving1.x = World.mouseX;
  moving1.y = World.mouseY;

  bounceoff(fixedRect,movingRect)
  
  
  if(isTouching(moving1,moving2)){
    moving1.shapeColor = "yellow"
    moving2.shapeColor = "pink"
  }
  else{
    moving1.shapeColor = "red"
    moving2.shapeColor = "red"
  }

  drawSprites();
}

