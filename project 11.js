var coin;
var bomb;
var drink;
var path ; 
var invisiblePath1 , invisiblePath2;
var power;
var runner , boy_running ;

function preload(){

  coin = loadAnimation("coin.png");
  bomb = loadAnimation("bomb.png");
  drink = loadAnimation("energyDrink.png");
  pathImg = loadImage("path.png");
  power = loadAnimation("power.png");
  boy_running = loadAnimation("Runner-1.png" , "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  runner = createSprite(50,160,20,50);
  runner.addAnimation("running" , boy_running);
  runner.scale = 0.1;
  
  path = createSprite(200,200);
  path.addImage( pathImg );
  path.velocityY = 4;
  path.scale = 1.2;

  invisiblePath1 = createSprite(400,200,15,300);
  invisiblePath1.visible = false; 

  invisiblePath2 = createSprite(0,200,15,300);
  invisiblePath2.visible = false ;
  

 var rand =  Math.round(random(1,200))
  console.log(rand)

}

function draw() {
  background("black");
  
  runner.collide(invisiblePath1);
  runner.collide(invisiblePath2);
 
 if (path.y > 400 ){
     path.y = path.height/2;
 }
   path.depth = runner.depth 
   runner.depth = runner.depth + 1;

     drawSprites();
}
