const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottomG,topG,leftG,rightG,topG1,leftG1


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
 rectMode(CENTER);
  ellipseMode(RADIUS);
  bottomG = new Ground(200,390,400,20)
  topG= new Ground(340,245,100,20)
  rightG=new Ground(390,200,20,400)
  leftG=new Ground(280,210,20,90)
  topG1= new Ground(200,10,400,20);
  leftG1= new Ground(10,200,20,400);
  ball=Bodies.circle(40,100,20,{restitution:0.1})
  World.add(world,ball)
  
  b1=createImg("push.png")
  b1.position(220,30)
  b1.size(50,50)
b1.mouseClicked(hforce)
}
function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
}
function draw() 
{
  background(51);
  Engine.update(engine);
  bottomG.display()
  topG.display()
  rightG.display()
  leftG.display()
  topG1.display()
  leftG1.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}

