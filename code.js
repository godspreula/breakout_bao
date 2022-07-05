var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var paddle = createSprite(200, 375, 50, 15);
var ball = createSprite(150, 250, 20, 20);

var score=0;
var gameState ="serve";



stopSound("assets/category_background/repitition.mp3");


var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="yellow";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="yellow";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="yellow";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="yellow";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="yellow";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


function draw() {
  background("white");
  
  
  textSize(15);
  stroke("red");
  text("Pontuação :"+score,300,20);
  
  if(gameState == "serve")
  {
    textSize(20);
    stroke("blue");
    fill("red");
    text("Bem-vindo! Pressione Enter para iniciar.",30,200);
  }
  
  if (gameState == "GG"){
    ball.velocityX = 0;
    ball.velocityY = 0;
    stroke("red");
    fill("blue");
    text("Voce Venceu",200,200);
  }
  
  
  
  
  if(gameState == "play")
  {
  
  paddle.x=World.mouseX;
  }
  
  if (gameState == "end"){
  }
  
  
  
  
  
    
  
  
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
    gameState = "play";
  }
  

  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);
  //ball.bounceOff(box1);
  //.bounceOff(box2);
  //ball.bounceOff(box3);
 // ball.bounceOff(box4);
 // ball.bounceOff(box5);
 // ball.bounceOff(box6);
 // ball.bounceOff(box7);
//ball.bounceOff(box8);
  //ball.bounceOff(box9);
 // ball.bounceOff(box10);
 // ball.bounceOff(box11);
 // ball.bounceOff(box12);
 // ball.bounceOff(box13);
  //ball.bounceOff(box14);
  ///ball.bounceOff(box15);
  /////ball.bounceOff(box16);
  
  
  paddle.x=World.mouseX;
  
  if (ball.isTouching(paddle)) {
    playSound("assets/category_digital/jump_1.mp3", false);
  }
  
  
  
  
  if(ball.isTouching(box1))
  {
    score=score+1;
    box1.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box2))
  {
    score=score+1;
    box2.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box3))
  {
    score=score+1;
    box3.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box4))
  {
    score=score+1;
    box4.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box5))
  {
    score=score+1;
    box5.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box6))
  {
    score=score+1;
    box6.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box7))
  {
    score=score+1;
    box7.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box8))
  {
    score=score+1;
    box8.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box9))
  {
    score=score+1;
    box9.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box10))
  {
    score=score+1;
    box10.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  
  if(ball.isTouching(box11))
  {
    score=score+1;
    box11.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box12))
  {
    score=score+1;
    box12.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box13))
  {
    score=score+1;
    box13.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box14))
  {
    score=score+1;
    box14.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box15))
  {
    score=score+1;
    box15.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  if(ball.isTouching(box16))
  {
    score=score+1;
    box16.destroy();
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  }
  
  
  if (score == 16){
    gameState = "GG";
    
  }
  
  if (ball.isTouching(bottomEdge)){
    gameState = "end";
    ball.velocityX = 0;
    ball.velocityY = 0;
    fill("red");
    textSize(30);
    text("Voce perdeu",200,200);
  }
  
  
  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
