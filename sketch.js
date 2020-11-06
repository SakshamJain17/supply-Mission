var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1500, 500);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(200, 95, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue")
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(200 , 100 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("black");
  //packageSprite.x= packageBody.position.x 
  //packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x;
	createEdgeSprites;
	packageSprite.collide(groundSprite);
  //packageSprite.bounceOff(groundSprite);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    helicopterSprite.velocityX=-2;
  }
  if (keyCode === RIGHT_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    helicopterSprite.velocityX=2;
  }
  if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    packageSprite.velocityY=2;
  }
}



