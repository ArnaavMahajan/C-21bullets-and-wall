var bullet,bullet2,wall,wall2;

function setup() {
  createCanvas(1600,800);
  bullet =  createSprite(400, 200, 30, 10);
  bullet2 = createSprite(400,130,30,10);
  

  wall2 = createSprite(1500,110,10,50);
  wall = createSprite(1500,200,10,50);
 
  bullet.shapeColor ="white";
  bullet2.shapeColor ="white";
  
}

function draw() {
  background("black");  
bullet.velocityX = 3;
bullet2.velocityX = 6;

if(bullet.collide(wall)){
  wall.shapeColor="green"
}
if( bullet2.collide(wall2)){
  wall2.shapeColor = "red";
}


  drawSprites();
}