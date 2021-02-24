
var monkey , monkey_running
var bannana ,bananaImage, obstacle, obstacleImage
var bannanaGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bannanaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400)
  
monkey = createSprite(20, 350, 20, 20)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
ground = createSprite(200, 390, 400, 20)
  
  score = 0
  
    bannanaGroup = new Group();
    obstacleGroup = new Group();

}


function draw() {
  background("white")

  textSize(15);
  text("Score: "+ score, 310,20);
  
      monkey.velocityY = monkey.velocityY + 0.5;
  
   if (monkey.isTouching(ground)){
    monkey.velocityY = 0
     
      if (keyDown("space") && monkey.isTouching(ground)) {
      monkey.velocityY = -8;
    }
  }
  
   

if (frameCount % 80 === 0) {
    bannana = createSprite(390, 200, 20, 20);
    bannana.addImage("boonahnah", bannanaImage);
  bannana.scale = 0.1;
  bannana.y=Math.round(random(330, 380));
  bannana.velocityX = -5
  bannana.lifetime = 100
        bannanaGroup.add(bannana);
    }
  
  

  
  if (monkey.isTouching(bannanaGroup)) {
    bannanaGroup[0].destroy()
  score = score + 1
    console.log(score)
  }
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(390, 365, 20, 20);
    obstacle.addImage("oobstackle", obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -5
  obstacle.lifetime = 100
        obstacleGroup.add(obstacle);
  }
  
  if (monkey.isTouching(obstacleGroup)) {
    bannana.velocityX = 0
    monkey.velocityY = 0
    monkey.velocityX = 0
    obstacle.velocityX = 0
    console.log("dieee")
    bannana.lifetime = 10000
    obstacle.lifetime = 10000
  }
  
drawSprites();
}