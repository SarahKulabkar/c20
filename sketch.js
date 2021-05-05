var mR, fR

function setup() {
  createCanvas(800,400);
  mR = createSprite(400, 200, 50, 50);
  fR = createSprite(700, 200, 70, 50);

  mR.shapeColor="green";
  fR.shapeColor="green";

  
}

function draw() {
  background("black");  

  mR.x=mouseX;
  mR.y=mouseY;

  if(mR.x-fR.x<mR.width/2+fR.width/2&&
    fR.x-mR.x<mR.width/2+fR.width/2&&
    mR.y-fR.y<mR.height/2+fR.height/2&&
    fR.y-mR.y<mR.height/2+fR.height/2){
      mR.shapeColor="red";
      fR.shapeColor="red";
    }
    else{
      mR.shapeColor="green";
      fR.shapeColor="green";
    }

  drawSprites();
}