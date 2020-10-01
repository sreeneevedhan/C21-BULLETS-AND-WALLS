var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1300,400);
  thickness=random(22,83);
 bullet=createSprite(50, 200, 70, 30);
 wall=createSprite(1100,200,thickness,height/2);
 wall.shapeColor=color(80,80,80);
 speed=random(223,321);
 weight=random(30,52);
}

function draw() {
  background(255,255,255);  

  bullet.velocityX=200;

 bullet.shapeColor=color(0,0,0);

 if(wall.x-bullet.x<=(bullet.width+wall.width/2)){
   bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
wall.shapeColor=color(225,0,0);
}
if(damage<10){

  wall.shapeColor=color(0,255,0);
}
 }
  drawSprites();
}
