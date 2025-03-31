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
    function createObstacles (x, y, hitSize, damage, image){
      var hitZoneSize = hitSize;//define the size of the hitzone and assign it to a variable
      var damageFromObstacle = damage;//define the damage the obastacle causes and assigns it to a variable
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates the obstacle hit zone using the size and damage as paramters and assigns it as a variable
      obstacleHitZone.x = x;//sets the x coordinate of the sawblade
      obstacleHitZone.y = y;//sets the y coordinate of the sawblade
      game.addGameItem(obstacleHitZone);//adds the sawblade hit zone to the game through the function addGameItem
      var obstacleImage = draw.bitmap(image);//draws the sawblade image and stores it in the obstacleImage 
      obstacleHitZone.addChild(obstacleImage);//attatches the image to the sawblade hitzone
      obstacleImage.x = -25;//position the image on the hit zone's x value by moving it to the left 25 units
      obstacleImage.y = -25;//position the image on the hit zone's y value by moving it up 25 units
      obstacleHitZone.rotationalVelocity = -10;//sets the rotational velocity of the obstacle
    }
    //createObstacles(400, groundY, 25, 10);
    //createObstacles(800, groundY, 25, 10);
    //createObstacles(1200, groundY, 25, 10);

    function createEnemy (x, y, speed, health, score, image, scale) {
      var enemy = game.createGameItem("enemy", 25);//creates your enemy game item and adds it to the game
      var enemyImage = draw.bitmap(image);//creates a red square and stores it in the variable redSquare
      enemyImage.scaleX = scale;
      enemyImage.scaleY = scale;
      enemyImage.x = -25*scale;//offsets image from the hitzone by -25 horizontally
      enemyImage.y = -25*scale;//offsets image from the hitzone by -25 vertically
      enemy.addChild(enemyImage);//adds the red square as a child to our enemy variable
      enemy.x = x;//x position of enemy 
      enemy.y = y;//y position of enemy
      game.addGameItem(enemy);//adds the enemy to the game
      enemy.velocityX -= speed;//controlling how fast the enemy moves on the x axis
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(health)//subtracts 10 health from hallebot's hud
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(score);//increases score by 100 on projectile collision
        enemy.fadeOut();//enemy fades out on projectile collision
        //shrink()//enemy shrinks out of existence on projectile collision
        //flyTo(x,y)//enemy flies to x, y on projectile collision
      };
    };

    //createEnemy(400, groundY - 50, 3, -10, 100);
    //createEnemy(800, groundY - 50, 3, -10, 100);
    //createEnemy(1200, groundY - 50, 3, -10, 100);

    function createReward (x, y, speed, health) {
      var reward = game.createGameItem("reward", 25);//creates your reward game item and adds it to the game
      var blueSquare = draw.rect(50, 50, "blue");//creates a blue square and stores it in the variable blueSquare
      blueSquare.x = -25;//offsets image from the hitzone by -25 horizontally
      blueSquare.y = -25;//offsets image from the hitzone by -25 vertically
      reward.addChild(blueSquare);//adds the blue square as a child to our reward variable
      reward.x = x;//x position of reward 
      reward.y = y;//y position of reward
      game.addGameItem(reward);//adds the reward to the game
      reward.velocityX -= speed;//controlling how fast the reward moves on the x axis
      reward.onPlayerCollision = function () {
        game.changeIntegrity(health)//adds 10 health from hallebot's hud
        game.increaseScore(50);
        reward.shrink()//reward shrinks out of existence on player collision
      };
    };

    //createReward(600, groundY-50, 3, 10);

    

    function createLevel (x, y, speed) {
      var level = game.createGameItem("level", 25);//creates your level game item and adds it to the game
      var yellowSquare = draw.rect(50, 50, "yellow");//creates a yellow square and stores it in the variable yellowSquare
      yellowSquare.x = -25;//offsets image from the hitzone by -25 horizontally
      yellowSquare.y = -25;//offsets image from the hitzone by -25 vertically
      level.addChild(yellowSquare);//adds the yellow square as a child to our level variable
      level.x = x;//x position of level 
      level.y = y;//y position of level
      game.addGameItem(level);//adds the level to the game
      level.velocityX -= speed;//controlling how fast the level moves on the x axis
      level.onPlayerCollision = function () {
        level.shrink()//level shrinks out of existence on player collision
        startLevel();
      };
    };

    //createLevel(2000, groundY - 50, 3)

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]//fetches the current level from the levelData array and stores it in var level
      var levelObjects = level.gameItems//retrieves the array of game items and stores it in levelObjects
      for (var i = 0; i < levelObjects.length; i++) {
        var element = levelObjects[i];
        if (element.type === "obstacle") {//checks the type key:value of the gameItems objects
          createObstacles(element.x, element.y, element.hitSize, element.damage, element.image)//if the condition is true it will call the relevant function
        }
        if (element.type === "enemy") {//checks the type key:value of the gameItems objects
          createEnemy(element.x, element.y, element.speed, element.health, element.score, element.image)//if the condition is true it will call the relevant function
        }
        if (element.type === "reward") {//checks the type key:value of the gameItems objects
          createReward(element.x, element.y, element.speed, element.health)//if the condition is true it will call the relevant function
        }
        if (element.type === "level") {//checks the type key:value of the gameItems objects
          createLevel(element.x, element.y, element.speed)//if the condition is true it will call the relevant function
        }
      }

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
