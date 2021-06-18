var snowflake1, snowflake1img;
var snowflake2;
var snowflake3, snowflake2img;
var snowflake4;
var snowball1, snowball1img;
var snowball2, snowball2img;
var snowball3, snowball3img;
var snowcloud, snowcloudimg;
var snowcloudState;
var penguin, penguinimg, penguinimg2;
var girlsnowman, girlsnowmanimg, girlimg;
var girlskating, girlskatingimg, girlskatingimg2;
var girlskating1, girlskating1img, girlskating2img;
var boy1, boy1img;
var boy2, boy2img;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("pics/snowValley.png");
  penguinimg = loadImage("pics/penguin.png") 
  penguinimg2 = loadImage("pics/PenguinIceSkating.png");
  girlsnowmanimg = loadImage("pics/GirlSnowman.png");
  girlimg = loadImage("pics/girl.png");
  girlskatingimg = loadImage("pics/GirlIceSkating.png");
  girlskatingimg2 = loadImage("pics/girl2.png");
  girlskating1img = loadImage("pics/Girl2IceSkating.png");
  girlskating2img = loadImage("pics/girl3.png")
  boy1img = loadImage("pics/boy.png");
  boy2img = loadImage("pics/boy2.png");
  snowball1img = loadImage("pics/snowball1.png");
  snowball2img = loadImage("pics/snowball2.png");
  snowball3img = loadImage("pics/snowball3.png");
  snowflake1img = loadImage("pics/snowflake.png");
  snowflake2img = loadImage("pics/snowflake2.png");
  snowcloudimg = loadImage("pics/snowcloud.png");
}

function setup() {
  createCanvas(800,400);

  penguin = createSprite(700,250,100,100);
  //penguin.addImage(penguinimg2);
  penguin.addImage(penguinimg);
  penguin.scale = 0.3;

  girlsnowman = createSprite(200,230,100,100);
  //girlsnowman.addImage(girlsnowmanimg);
  girlsnowman.addImage(girlimg);
  girlsnowman.scale = 0.35;

  girlskating = createSprite(590,250,100,100)
  girlskating.addImage(girlskatingimg);
  girlskating.addImage(girlskatingimg2);
  girlskating.scale = 0.3;

  girlskating1 = createSprite(480,250,100,100)
  girlskating1.addImage(girlskating1img);
  girlskating1.addImage(girlskating2img);
  girlskating1.scale = 0.3;

  boy1 = createSprite(350,230,100,100);
  boy1.addImage(boy1img);
  boy1.scale = 0.3;

  boy2 = createSprite(70,230,100,100);
  boy2.addImage(boy2img);
  boy2.scale = 0.3;

  snowball1 = createSprite(30,310,100,100);
  snowball1.addImage(snowball1img);
  snowball1.scale = 0.1;

  snowball2 = createSprite(300,300,100,100);
  snowball2.addImage(snowball2img);
  snowball2.scale = 0.1;

  snowball3 = createSprite(670,350,100,100);
  snowball3.addImage(snowball3img);
  snowball3.scale = 0.1;

  snowflake1 = createSprite(400,-20,0,0);
  snowflake1.addImage(snowflake1img);
  snowflake1.scale = 0.1
  snowflake1.velocityY = 3;

  snowflake2 = createSprite(550,-20,0,0);
  snowflake2.addImage(snowflake1img);
  snowflake2.scale = 0.1
  snowflake2.velocityY = 2;

  snowflake3 = createSprite(670,-20,0,0);
  snowflake3.addImage(snowflake2img);
  snowflake3.scale = 0.1
  snowflake3.velocityY = 4;

  snowflake4 = createSprite(200,-20,0,0);
  snowflake4.addImage(snowflake2img);
  snowflake4.scale = 0.1
  snowflake4.velocityY = 3.5;

  snowcloud = createSprite(-88,70,100,100);
  snowcloud.addImage(snowcloudimg);
  snowcloud.scale = 0.2;
  snowcloud.velocityX = 3;
}

function draw() {
  background(backgroundImg);
  if(snowflake1.y>=400){
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: snowflake1.x = 100;
              break;
      case 2: snowflake1.x = 200;
              break;
      case 3: snowflake1.x = 300;
              break;
      case 4: snowflake1.x = 400;
              break;
      case 5: snowflake1.x = 500;
              break;
      case 6: snowflake1.x = 600;
              break;
      case 7: snowflake1.x = 700;
              break;
      default: break;
    }
      snowflake1.y=-20;
      snowflake1.velocityY = 3;
  }
  if(snowflake2.y>=400){
    var rand = Math.round(random(1,8));
    switch(rand){
      case 1: snowflake2.x = 150;
              break;
      case 2: snowflake2.x = 250;
              break;
      case 3: snowflake2.x = 350;
              break;
      case 4: snowflake2.x = 450;
              break;
      case 5: snowflake2.x = 550;
              break;
      case 6: snowflake2.x = 650;
              break;
      case 7: snowflake2.x = 750;
              break;
      case 8: snowflake2.x = 50;
              break;
      default: break;
    }
      snowflake2.y=-20;
      snowflake2.velocityY = 2;
  }
  if(snowflake3.y>=400){
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: snowflake3.x = 120;
              break;
      case 2: snowflake3.x = 220;
              break;
      case 3: snowflake3.x = 320;
              break;
      case 4: snowflake3.x = 420;
              break;
      case 5: snowflake3.x = 520;
              break;
      case 6: snowflake3.x = 620;
              break;
      case 7: snowflake3.x = 720;
              break;
      default: break;
    }
      snowflake3.y=-20;
      snowflake3.velocityY = 4;
  }
  if(snowflake4.y>=400){
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: snowflake4.x = 90;
              break;
      case 2: snowflake4.x = 190;
              break;
      case 3: snowflake4.x = 290;
              break;
      case 4: snowflake4.x = 390;
              break;
      case 5: snowflake4.x = 490;
              break;
      case 6: snowflake4.x = 590;
              break;
      case 7: snowflake4.x = 690;
              break;
      default: break;
    }
      snowflake4.y=-20;
      snowflake4.velocityY = 3.5;
  }

  if(snowcloud.x>=800){
    snowcloud.velocityX = -3;
  }
  if(snowcloud.x<=0){
    snowcloud.velocityX = 3;
  }
  if((snowflake1.isTouching(penguin)) || (snowflake2.isTouching(penguin))){
    penguin.addImage(penguinimg2);
  } else if((snowflake3.isTouching(penguin)) || (snowflake4.isTouching(penguin))){
    penguin.addImage(penguinimg);
  }

  if((snowflake1.isTouching(girlsnowman)) || (snowflake2.isTouching(girlsnowman))){
    girlsnowman.addImage(girlsnowmanimg);
  } else if((snowflake3.isTouching(girlsnowman)) || (snowflake4.isTouching(girlsnowman))){
    girlsnowman.addImage(girlimg);
  }

  if((snowflake1.isTouching(girlskating)) || (snowflake2.isTouching(girlskating))){
    girlskating.addImage(girlskatingimg);
  } else if((snowflake3.isTouching(girlskating)) || (snowflake4.isTouching(girlskating))){
    girlskating.addImage(girlskatingimg2);
  }

  if((snowflake1.isTouching(girlskating1)) || (girlskating1.isTouching(penguin))){
    girlskating1.addImage(girlskating1img);
  } else if((snowflake3.isTouching(girlskating1)) || (snowflake4.isTouching(girlskating1))){
    girlskating1.addImage(girlskating2img);
  }

  drawSprites();
}