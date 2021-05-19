var boy, boy_img, tree, stone, tree_img, ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var gameState = "onSling";
var slingshot;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	tree_img = loadImage("tree.png");
	boy_img = loadImage("boy.png")
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(1150, 400, 10, 10);
	tree.addImage(tree_img);
	tree.scale=0.5;
	boy = createSprite(290, 580, 20 ,20);
	boy.addImage(boy_img);
	boy.scale=0.2
	mango1 = new Mango(970,345);
	mango2 = new Mango(970, 265);
	mango3 = new Mango(1040, 195);
	mango4 = new Mango(1080, 290);
	mango5 = new Mango(1330, 345);
	mango6 = new Mango(1330, 255);
	mango7 = new Mango(1180, 180);
	mango8 = new Mango(1225, 290);
	ground= new Ground(750, 720, 1500, 20);
	stone = new Stone(150, 440);
	slingshot = new SlingShot(stone.body,{x:150, y:440});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
	drawSprites();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	ground.display();
	stone.display();
	slingshot.display();
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);

  /*textSize(20);
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);*/
}
function mouseDragged(){
	if (gameState!=="launched"){
	   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	   Matter.Body.applyForce(stone.body,stone.body.position,{x:5,y:-5});
   }
}

function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}

function keyPressed(){
   if(keyCode === 32 && gameState==="launched"){
	   Matter.Body.setPosition(stone.body,{x:200,y:50});
	  slingshot.attach(stone.body);
	  gameState ="onSling";
	   }
   }

function detectCollision(lstone, lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body, false);
}
}

