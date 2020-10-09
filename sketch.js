

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stand1,stand2;
var box1,box2,box3,box4,box5,box6,box10,box7,box8,box9,box10,box11,box12,box13,box14;

var box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27;

var polygon,slingShot;

var score=0;
function setup() {
  createCanvas(1500,700);
  
	engine = Engine.create();
	world = engine.world;

ground=new Ground(900,690,1800,20);

stand1=new Ground(1200,300,380,20);

stand2=new Ground(700,500,380,20);

polygon=new Polygon(100,350,50);

slingShot = new SlingShot(polygon.body,{x:130,y:330});

  box1=new Box (1080,260,50,70);

 box2=new Box (1130,260,50,70);
 box3=new Box (1180,260,50,70);
 box4=new Box (1230,260,50,70);
 box5=new Box (1280,260,50,70);
 box6=new Box (1330,260,50,70);
 box7=new Box (1130,260,50,70);
 box8=new Box (1130,190,50,70);
 box9=new Box (1180,190,50,70);
 box10=new Box (1230,190,50,70);
 box11=new Box (1280,190,50,70);
 box12=new Box (1180,120,50,70);
 box13=new Box (1230,120,50,70);
 box14=new Box (1205,50,50,70);

 box15=new Box (580,460,50,70);
 box16=new Box (630,460,50,70);
 box17=new Box (680,460,50,70);
 box18=new Box (730,460,50,70);
 box19=new Box (780,460,50,70);
 box20=new Box (830,460,50,70);
 box21=new Box (630,390,50,70);
 box22=new Box (680,390,50,70);
 box23=new Box (730,390,50,70);
 box24=new Box (780,390,50,70);
 box25=new Box (680,320,50,70);
 box26=new Box (730,320,50,70);
 box27=new Box (705,250,50,70);
 

}

function draw() {
  background("cyan"); 
  Engine.update(engine);

 // text (mouseX+","+mouseY,mouseX,mouseY);

 noStroke();
 textSize(20);
 fill ("white");
 text("Score:"+score,900,50);

ground.display();
stand1.display();
stand2.display();

polygon.display();

slingShot.display();

fill ("blue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
fill ("yellow");
box7.display();
box8.display();
box9.display();
box10.display();
fill ("red");
box11.display();
box12.display();
fill ("purple");
box13.display();
fill ("blue");
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
fill ("yellow");
box20.display();
box21.display();
box22.display();
box23.display();
fill ("red");
box24.display();
box25.display();
fill ("purple");
box26.display();
box27.display();


box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
//fill ("yellow");
box7.score();
box8.score();
box9.score();
box10.score();
//fill ("red");
box11.score();
box12.score();
//fill ("purple");
box13.score();
//fill ("blue");
box14.score();
box15.score();
box16.score();
box17.score();
box18.score();
box19.score();
//fill ("yellow");
box20.score();
box21.score();
box22.score();
box23.score();
//fill ("red");
box24.score();
box25.score();
//fill ("purple");
box26.score();
box27.score();


  drawSprites();
}



function mouseDragged () {

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  
  } 
  
  
  function mouseReleased () {
  
  slingShot.fly();
  
  
  
  }


  function keyPressed(){

if(keyCode===32){

slingShot.attach(polygon.body);

}


  }