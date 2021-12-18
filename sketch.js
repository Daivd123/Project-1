var box;

function setup() {
createCanvas(400,400);
background(51);
box = createSprite(200,200,30,30);

}

function draw() {

if (keyIsDown(RIGHT_ARROW)) {
  background("lightpink");
}

if(keyIsDown(LEFT_ARROW)) {
  background("orange");
}

if (keyIsDown(UP_ARROW)) {
  background("lightblue");
}

if (keyIsDown(DOWN_ARROW)) {
  background("lightgreen");
}

drawSprites();
}