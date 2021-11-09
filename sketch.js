var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, redb1, pinkb1 ,blueb1, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  redb1 = loadImage("red_balloon0.png");
  pinkb1 = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
     } else if (select_balloon == 2){
       pinkBalloon();
     } else if (select_balloon == 3){
       blueBalloon
     }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(redb1);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.9;

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(30, 350)), 10, 10);
  pink.addImage(pinkb1);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.9;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 350)), 10, 10);
  blue.addImage(blue1);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.9;
 
}
