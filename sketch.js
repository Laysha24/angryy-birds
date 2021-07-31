const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2000,20);
   
    for (var i = 900; i < 1200; i+=50)
   { box1 = new Box(i,600,50,50);}
    
}

function draw(){
    
        background(0);
    
       
       
    
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
    box1.display();
      
}

function mouseDragged(){
    
}


function mouseReleased(){
   
}

