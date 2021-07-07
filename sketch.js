
var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30);
}

function draw() {

  background("red");

if(keyIsDown(LEFT_ARROW)){
  ball.x=ball.x-3;
}

if(keyIsDown(RIGHT_ARROW)){
  ball.x=ball.x+3;
}

if(keyIsDown(UP_ARROW)){
  ball.y=ball.y-3;
}

if(keyIsDown(DOWN_ARROW)){
  ball.y=ball.y+3;
}
//write if statement to change color.
if(keyDown("g")){
  background("green");
}
if(keyDown("u")){
  background("purple");
}
if(keyDown("y")){
  background("yellow");
}
if(keyDown("p")){
  background("pink");
}
if(keyDown("B")){
  background("blue");
}
if(keyDown("l")){
  background("lightblue");
}
if(keyDown("c")){
  background("black");
}
if(keyDown("w")){
  background("white");
}

  drawSprites();
}



