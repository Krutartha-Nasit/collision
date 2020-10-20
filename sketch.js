var fixrect,movrect

function setup() {
  createCanvas(400,400);
 movrect= createSprite(100, 200,10, 50);
 fixrect=createSprite(300,200,50,50);
 movrect.velocityX=2;
 fixrect.velocityX=-2;
}

function draw() {
  background(89,23,123);  
  if(movrect.x-fixrect.x==movrect.width/2+fixrect.width/2
    ||fixrect.x-movrect.x==movrect.width/2+fixrect.width/2
    ||fixrect.y-movrect.y==movrect.height/2+fixrect.height/2
    ||movrect.y-fixrect.y==movrect.height/2+fixrect.height/2){
    movrect.shapeColor="yellow";
    fixrect.shapeColor="yellow";
  }
  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2&&
    fixrect.x-movrect.x<movrect.width/2+fixrect.width/2
    ){
    movrect.velocityX=movrect.velocityX * (-1);
    fixrect.velocityX=fixrect.velocityX * (-1);
  }
  drawSprites();
}