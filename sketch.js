var bullet;
var wall,thickness;
var speed , weight;
var damage;

function setup() {
  
  createCanvas(1600,400);

    bullet =  createSprite(50, 200, 50, 20);
    bullet.shapeColor="white";
    bullet.debug=true;

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor=(80,80,80);
    wall.debug=true;

    speed = random (55,90);
    weight= random (400,1500);
    thickness = random(22,83);
 
    bullet.velocityX=speed;

}

function draw() 
{

  background(0);

  wall.width=thickness; 

if (isTouching(wall,bullet))
{  
  bullet.velocityX=0;
  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage<10)
  {
    wall.shapeColor = "green";
    bullet.shapeColor="green";
  }

  if (damage>10)
  {
    wall.shapeColor="red";
    bullet.shapeColor="red";
  }
}

  drawSprites();
}