var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c66467ca-bcc3-4356-8da0-2ac1c899d6b6","7b36ad94-4555-4e1d-8138-49c256f9ca9f","3ccd95f3-fe59-414e-ab16-4f2703d9b8a3"],"propsByKey":{"c66467ca-bcc3-4356-8da0-2ac1c899d6b6":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":13,"looping":true,"frameDelay":12,"version":"9ttnq8lQwcSjNSkcLKjIirunhILIRsnC","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c66467ca-bcc3-4356-8da0-2ac1c899d6b6.png"},"7b36ad94-4555-4e1d-8138-49c256f9ca9f":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5HB.YA6XJIZ.D4W1asDf1rzXn5cAeZ5V","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7b36ad94-4555-4e1d-8138-49c256f9ca9f.png"},"3ccd95f3-fe59-414e-ab16-4f2703d9b8a3":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":30,"version":"M0blTN_osbk2ga.YXmB_vGSdP9uF6YRn","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/3ccd95f3-fe59-414e-ab16-4f2703d9b8a3.png"}}};
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

 
//The Game setting 
  var setting1 =createSprite(200,200,400, 400);
  setting1.scale = 4;
  setting1.setAnimation("animation_1");
  var ball = createSprite(45, 270,10, 10);


//The Border for the Game
  var line1 = createSprite(80, 180, 3, 99);
  line1.shapeColor = "black";
  var line2 = createSprite(175, 135, 200, 3);
  line2.visible = false;
  var line3 = createSprite(360, 140, 3, 148);
  line3.visible = false;
  var line4 = createSprite(300, 235, 3, 65);
  line4.visible = false;
  var line5 = createSprite(80,270,3, 94);
  line5.shapeColor = "Green";
  var line6 = createSprite(78, 315, 185, 3);
  line6.visible = false;
  var line7 = createSprite(10, 275, 3, 120);
  line7.visible = false;
  var line8 = createSprite(45, 225, 75, 3);
  line8.visible = false;
  var line9 = createSprite(145, 290,3 ,50);
  line9.visible = false;
  var line10 = createSprite(220, 265, 150, 3);
  line10.visible = false;
  var line11 = createSprite(300, 240, 3, 75);
  line11.visible = false;
  var line12 = createSprite(325, 205, 55, 3);
  line12.visible = false; 
  var line13 = createSprite(270, 100, 3, 65);
  line13.visible = false;
  var line14 = createSprite(310, 135, 89, 3);
  line14.shapeColor = "brown";
  var goal1 = createSprite(315, 105, 85, 55);
  goal1.shapeColor = "red";
  var GameOver = createSprite(200,200,400,400);
  GameOver.visible = false;

   
 
 //creating projectiles for the game
 //projectile 1
   var projectile1 = createSprite(180,235,20, 20);
   projectile1.setAnimation("animation_2");
   projectile1.scale = 0.3;
  //projectile 2
   var projectile2 = createSprite(180, 170, 20, 20);
  projectile2.setAnimation("animation_2");
  projectile2.scale = 0.3;
 
 //velocity for the projectiles
  projectile1.velocityX = 2;
  projectile1.velocityY = 0;
 
  projectile2.velocityX = -2;
  projectile2.velocityY = 0;
 
 function draw() {
   background("white");
    
    
 //The different sounds for the Game
 if (ball.isTouching(GameOver)){
   ; 
 }

 //controls for the ball
   if (keyDown(UP_ARROW)){
     ball.velocityX = 0;
     ball.velocityY = -4;
   }
   if (keyDown(DOWN_ARROW)){
     ball.velocityX = 0;
     ball.velocityY = 4;
   } 
   if (keyDown(RIGHT_ARROW)){
     ball.velocityX = 4;
     ball.velocityY = 0;
   }
   if (keyDown(LEFT_ARROW)){
     ball.velocityX = -4;
     ball.velocityY = 0;
   }
 //Making the Projectiles bounce Off the Borders  
  
   projectile1.bounceOff(line2);
   projectile1.bounceOff(line4);
   projectile1.bounceOff(line5);
   
   projectile2.bounceOff(line1);
   projectile2.bounceOff(line3);
   
   ball.bounceOff(line1);
   ball.bounceOff(line2);
   ball.bounceOff(line3);
   ball.bounceOff(line4);
   ball.bounceOff(line6);
   ball.bounceOff(line7);
   ball.bounceOff(line8);
   ball.bounceOff(line9);
   ball.bounceOff(line10);
   ball.bounceOff(line11);
   ball.bounceOff(line12);
   ball.bounceOff(line13);
 

  if (ball.isTouching(projectile1)||ball.isTouching(projectile2)){
    ball.x = 45;
    ball.y = 270;
  }

  if (ball.isTouching(goal1)){
     GameOver.visible = true;
     GameOver.setAnimation("animation_3");
     ball.x = 0;
     ball.y = 0;
     
     projectile1.x = 0;
     projectile2.x = 0;
  }
     
 
 createEdgeSprites();
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
