var canvas,box1,box2,box3,box4,ball,box5;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    box1 = createSprite(140,550,200,40);
    box1.shapeColor = 0;
    box2 = createSprite(350,550,200,40);
    box2.shapeColor = "red";
    box3 = createSprite(560,550,200,40);
    box3.shapeColor = "blue";
    box4 = createSprite(770,550,200,40);
    box4.shapeColour = "yellow";
    box5 = createSprite(140,450,200,40);
    box5.shapeColor = "green";


    //create box sprite and give velocity
      ball = createSprite(random(20,750),100,40,40);
  ball.shapeColor = "white"
  ball.velocityX = 5;
  ball.velocityY = 4;
}

function draw() {
 background(rgb(169,169,169));
  
    //create edgeSprite
  edges = createEdgeSprites();
  box1.bounceOff(edges);
  box2.bounceOff(edges);
  box3.bounceOff(edges);
  box2.bounceOff(edges);
  ball.bounceOff(edges);

  //block1 = createSprite(140,545,200,30);
  //block1.shapeColor = "black";
  
  //block2 = createSprite(350,545,200,30);
  //block2.shapeColor = "red";
  
  //block3 =createSprite(560,545,200,30);
  //block3.shapeColor = "blue";
  
//  block4 = createSprite(770,545,200,30);
 // block4.shapeColor = (rgb(100,100,100));
  
    //add condition to check if box touching surface and make it box
  if(box1.isTouching(ball) && ball.bounceOff(box1)){
     ball.shapeColor = ("black")
    music.play();
  }
   if(box2.isTouching(ball) && ball.bounceOff(box2)){
     ball.shapeColor = ("red")
      music.stop();
     ball.velocityY = 0;
     ball.velocityX = 0;
  }
   if(box3.isTouching(ball) && ball.bounceOff(box3)){
     ball.shapeColor = ("blue")
      music.play();
  }
   if(box4.isTouching(ball) && ball.bounceOff(box4)){
   ball.shapeColor = (rgb(100,100,100))
      music.play();
  }
  
  
  drawSprites();
}
