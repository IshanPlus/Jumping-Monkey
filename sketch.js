
var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  monkey  = createSprite(40, 250, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(150, 280, 1200, 10);
  ground.velocityX = -(8/*+4*score/100*/);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(rgb = 102,205,170);
  
  text("Survival Rate: "+ score, 480, 30);
  score = score + Math.round(frameCount/60);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  if (keyDown("space") && monkey.y >= 230) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  spawnBanana();
  spawnObstacles();
 
  
  drawSprites();
}

function spawnBanana(){
  
  if (frameCount % 80 === 0) {
  banana = createSprite(600, 200, 20, 20);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120, 200));
  banana.velocityX = -4;
  banana.scale = 0.1;
  banana.lifetime = 160;
  
  bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount % 150 === 0){
    obstacle = createSprite(600, 245, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.16;
    obstacle.lifetime = 130;
    
    obstacleGroup.add(obstacle);
  }
}

