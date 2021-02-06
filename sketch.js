
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

var D_png
//var paper_Img

var Paperobj;

function preload() {

	//D_png = loadImage("dustbingreen.png")
    //paper_Img = loadImage("paper.png")
	}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,660,width,20);
	dustbinObj=new dustbin(1200,650);
	Paperobj=new paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  Engine.update(engine);
 
  Paperobj.display();
  groundObject.display();
  dustbinObj.display();
  
  //keyPressed();

  //drawSprites();

}

function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(Paperobj.body, Paperobj.body.position,{
	x:80,
	y:-100
});
}
}
