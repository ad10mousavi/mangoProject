
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Constraint = Matter.Constraint;

var engine, world;


function preload()
{
	
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

	ground = new Ground(400,height,800,20);
	
	mango1 = new Mango(500,400);
	mango2 = new Mango(540,350);
	mango3 = new Mango(580,300);
	mango4 = new Mango(500,310);
	mango5 = new Mango(580,210);

	stone = new Stone(200,600,30,30);
	tree = new Tree(600,500,200,200);

	rope = new Rope(stone.body,{x:200, y:600});
}

function draw(){
    background(backgroundImg);
	Engine.update(engine);
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	tree.display();
	rope.display();


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   rope.fly();
}