
var form;


//create sprite for leader, robber1,robber2,robber3
var leader,leaderStand, leaderJump, leaderShoot
var robber1,robber2,robber3,robberImage;

//sprite for marshal
var marshal,marshalStand, marshalJump, marshalShoot;
//creating a gameState with all the elements of form
var gameState = 0.5;

//b1,b2,b3,b4,b5 = background images

function preload(){
  //animation because there are jumps scenes
  leaderStand = loadAnimation("images/robber/leaderStand.png");//leader standing
  leaderJump = loadAnimation("images/robber/TerrorJump.png")//leader jumping and for group of animations use ',' and add images
  leaderShoot = loadAnimation("images/robber/leaderShoot.png");//shooting img of leader
  robberImage = loadAnimation("images/robber/Terror.png");//terrorist image standing to be loaded
  marshalImage = loadAnimation("images/robber/Marshall.png")//to load marshall image standing
  bgImage = loadImage("images/equips/forest.jpg");
  ropeImage = loadImage("images/equips/rope.png");
  gunImage = loadImage("images/equips/gun(2).png");
  skateImage = loadImage("images/equips/skates.png");
  
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  form = new Form();

  
  //create the sprite for all of them at random position
}

function draw() {
  background(bgImage);
  
  form.display();


  drawSprites();
}