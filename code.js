var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["278ef332-effc-4883-913c-8036d30118e7","3de87926-9326-4469-b1d4-d9794e787afd","47517295-b92d-4ab7-873e-15dad853bdf7"],"propsByKey":{"278ef332-effc-4883-913c-8036d30118e7":{"name":"alien","sourceUrl":null,"frameSize":{"x":72,"y":98},"frameCount":4,"looping":true,"frameDelay":12,"version":"VOiW4TPI53rfj976UcPnJX0yP1z5PgIG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":196},"rootRelativePath":"assets/278ef332-effc-4883-913c-8036d30118e7.png"},"3de87926-9326-4469-b1d4-d9794e787afd":{"name":"ufo","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":2,"looping":true,"frameDelay":12,"version":"pTR9MzEpm0VLdmab40yq6mG.nJJ3gIvD","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":788},"rootRelativePath":"assets/3de87926-9326-4469-b1d4-d9794e787afd.png"},"47517295-b92d-4ab7-873e-15dad853bdf7":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
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

var space = createSprite(200, 200);
space.setAnimation("space");

var ufo = createSprite(250, 100);
ufo.setAnimation("ufo");

var alien = createSprite(200, 200);
alien.setAnimation("alien");

alien.velocityX = 2;
alien.velocityY = 3;
createEdgeSprites();

function draw() {
 ufo.rotation = randomNumber(0,50);
 alien.bounceOff(edges);
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
