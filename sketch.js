const Engine=Matter.Engine;
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var backgroundImg,snowman,snowmanimg;

function preload(){
  backgroundImg=loadImage("snow1.jpg");
  snowmanimg=loadImage("snowman.JPEG");
}
function setup() {
  createCanvas(800,400);
  var snowman=createSprite(400, 200, 50, 50);
  snowman.addImage(snowmanimg);
  snowman.scale=0.1;
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    snowman.velocityX=-2;
  }
  if(keyCode===RIGHT_ARROW){
    snowman.velocityX=2;
  }
}