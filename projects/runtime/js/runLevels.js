var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles (x, y, hitSize, damage){
      var hitZoneSize = hitSize;//define the size of the hitzone and assign it to a variable
      var damageFromObstacle = damage;//define the damage the obastacle causes and assigns it to a variable
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle hit zone using the size and damage as paramters and assigns it as a variable
      sawBladeHitZone.x = x;//sets the x coordinate of the sawblade
      sawBladeHitZone.y = y;//sets the y coordinate of the sawblade
      game.addGameItem(sawBladeHitZone);//adds the sawblade hit zone to the game through the function addGameItem
      var obstacleImage = draw.bitmap("img/sawblade.png");//draws the sawblade image and stores it in the obstacleImage 
      sawBladeHitZone.addChild(obstacleImage);//attatches the image to the sawblade hitzone
      obstacleImage.x = -25;//position the image on the hit zone's x value by moving it to the left 25 units
      obstacleImage.y = -25;//position the image on the hit zone's y value by moving it up 25 units
    }
    createObstacles(400, groundY, 25, 10);
    createObstacles(800, groundY, 25, 10);
    createObstacles(1200, groundY, 25, 10);

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
