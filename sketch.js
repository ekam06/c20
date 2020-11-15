var a,b



function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 70, 30);
a.shapeColor="pink"

b=createSprite(200,200,30,120)
b.shapeColor="pink"


}

function draw() {
  background(255,255,255); 
  
  console.log(a.y-b.y)
  a.y=mouseY
  a.x=mouseX

  if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2 &&a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2){
a.shapeColor="black"
b.shapeColor="black"

  }
  else{

    a.shapeColor="pink"
    b.shapeColor="pink"
  }
  drawSprites();
}