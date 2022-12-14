var box
function setup() {
  createCanvas(800,800);
  box = createSprite (400,400,50,50)
}

function draw() 
{
  background("blue");
drawSprites ()
if (keyDown ("a")) {
  box.x = box.x - 5
}
if (keyDown ("d")) {
  box.x = box.x + 5
}
if (keyDown ("w")) {
  box.y = box.y - 5
}
if (keyDown ("s")) {
  box.y = box.y + 5
}
}




