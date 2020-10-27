var grassImage, slimeImage, guardImage, bushImage, lonelyTreeImage 

var slime, guard, bush, lonelyTree

var barrier1, barrier2, barrier3, barrier4;

var time

function preload(){
grassImage=loadImage("Grass.jpg");
SlimeImage=loadImage("I'm not a Bad Slime Slurp.png");
guardImage=loadImage("LES GARDES DU SLIME.png");
bushImage=loadImage("THE GREAT ANCIENT BUSH OF BUSHANIA.png");
lonelyTreeImage=loadImage("Tree.png")
}

function setup() {
  createCanvas(1420,795);
  slime=createSprite(400, 400, 30, 30);
  slime.addImage(SlimeImage);
  slime.scale=0.35;
  slime.setCollider("circle",0,0,55)

  guard1=createSprite(470, 200, 50, 50);
  guard1.addImage(guardImage);
  guard1.scale=0.4;
  guard2=createSprite(400, 200, 50, 50);
  guard2.addImage(guardImage);
  guard2.scale=0.4;

  bush1=createSprite(200,400,50,50);
  bush1.addImage(bushImage);
  bush1.scale=0.35
  bush2=createSprite(700,550,50,50);
  bush2.addImage(bushImage);
  bush2.scale=0.35
  bush3=createSprite(355,520,50,50);
  bush3.addImage(bushImage);
  bush3.scale=0.35
  bush4=createSprite(500,500,50,50);
  bush4.addImage(bushImage);
  bush4.scale=0.35
  bush5=createSprite(200,500,50,50);
  bush5.addImage(bushImage);
  bush5.scale=0.35
  bush6=createSprite(900,630,50,50);
  bush6.addImage(bushImage);
  bush6.scale=0.35
  bush7=createSprite(700,640,50,50);
  bush7.addImage(bushImage);
  bush7.scale=0.35
  bush8=createSprite(1000,640,50,50);
  bush8.addImage(bushImage);
  bush8.scale=0.35
  bush9=createSprite(1100,440,50,50);
  bush9.addImage(bushImage);
  bush9.scale=0.35
  bush10=createSprite(282,640,50,50);
  bush10.addImage(bushImage);
  bush10.scale=0.35
  bush11=createSprite(990,540,50,50);
  bush11.addImage(bushImage);
  bush11.scale=0.35
  bush12=createSprite(187,614,50,50);
  bush12.addImage(bushImage);
  bush12.scale=0.35
  bush13=createSprite(423,622,50,50);
  bush13.addImage(bushImage);
  bush13.scale=0.35
  bush14=createSprite(590,625,50,50);
  bush14.addImage(bushImage);
  bush14.scale=0.35
  bush15=createSprite(845,475,50,50);
  bush15.addImage(bushImage);
  bush15.scale=0.35
  bush16=createSprite(680,430,50,50);
  bush16.addImage(bushImage);
  bush16.scale=0.35
  bush17=createSprite(1130,560,50,50);
  bush17.addImage(bushImage);
  bush17.scale=0.35
  bush18=createSprite(1220,646,50,50);
  bush18.addImage(bushImage);
  bush18.scale=0.35
  bush19=createSprite(1225,420,50,50);
  bush19.addImage(bushImage);
  bush19.scale=0.35
  bush20=createSprite(505,370,50,50);
  bush20.addImage(bushImage);
  bush20.scale=0.35
  bush21=createSprite(830,360,50,50);
  bush21.addImage(bushImage);
  bush21.scale=0.35
  bush22=createSprite(310,390,50,50);
  bush22.addImage(bushImage);
  bush22.scale=0.35
  bush23=createSprite(940,380,50,50);
  bush23.addImage(bushImage);
  bush23.scale=0.35
  bush24=createSprite(1245,540,50,50);
  bush24.addImage(bushImage);
  bush24.scale=0.35

  for(var i=50; i<1400; i=i+70){
    lonelyTree1=createSprite(i, 40, 50, 50);
    lonelyTree1.addImage(lonelyTreeImage);
    lonelyTree1.scale=0.1;}

    for(var i=100; i<700; i=i+70){
      lonelyTree2=createSprite(40, i, 50, 50);
      lonelyTree2.addImage(lonelyTreeImage);
      lonelyTree2.scale=0.1;}

      for(var i=100; i<700; i=i+70){
        lonelyTree3=createSprite(1370, i, 50, 50);
        lonelyTree3.addImage(lonelyTreeImage);
        lonelyTree3.scale=0.1;}

    for(var i=50; i<1400; i=i+70){
      lonelyTree4=createSprite(i, 740, 50, 50);
      lonelyTree4.addImage(lonelyTreeImage);
      lonelyTree4.scale=0.1;}

    barrier1=createSprite(710,700,1420,10);
    barrier1.visible=false;
    
    barrier2=createSprite(90,346,10,796);
    barrier2.visible=false;

    barrier3=createSprite(710,90,1420,10);
    barrier3.visible=false;

    barrier4=createSprite(1330,346,10,796);
    barrier4.visible=false;

    time=new Date().getSeconds();
}

function draw() {
  background(grassImage);
  text(mouseX + "," + mouseY, mouseX, mouseY)

  var time1=new Date().getSeconds();
  if(time1-time>=5){
    fill("red")
    textSize(45);
    text("TIMES UP!!",135,155);
    time1=0
    time=0
  }
  
  slimeMovement();
  
  slime.collide(barrier1);
  slime.collide(barrier2);
  slime.collide(barrier3);
  slime.collide(barrier4);
  drawSprites();
}

function slimeMovement(){
if(keyDown (UP_ARROW)){
  slime.y=slime.y-7;
}
if(keyDown (DOWN_ARROW)){
  slime.y=slime.y+7;
}
if(keyDown (RIGHT_ARROW)){
  slime.x=slime.x+7;
}
if(keyDown (LEFT_ARROW)){
  slime.x=slime.x-7;
}
}