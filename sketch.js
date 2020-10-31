const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
 var canvas = createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground=new ground(200, 650, 100, 20);
//layer1 p1
  b1=new block(100, 620, 50, 100);
  b2=new block(700, 620, 50, 100);
  b3=new block(700, 620, 50, 100);
  b4=new block(700, 620, 50, 100);
  b5=new block(700, 620, 50, 100);
  b6=new block(700, 620, 50, 100);
  b7=new block(700, 620, 50, 100);
 //layer2 p1
  b1=new block(700, 520, 50, 100);
  b2=new block(700, 520, 50, 100);
  b3=new block(700, 520, 50, 100);
  b4=new block(700, 520, 50, 100);
  b5=new block(700, 520, 50, 100);
  //layer3 p1
  b1=new block(700, 420, 50, 100);
  b2=new block(700, 420, 50, 100);
  b3=new block(700, 420, 50, 100);
  //layer4 p1
  b1=new block(700, 320, 50, 100);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){

  if(keyCode===32){
   slingShot.attach(ball.body);
  }}