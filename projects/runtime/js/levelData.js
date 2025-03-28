var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, hitSize: 25, damage: 10},
          { type: "obstacle", x: 800, y: groundY, hitSize: 25, damage: 10 },
          { type: "obstacle", x: 1200, y: groundY, hitSize: 25, damage: 10 },

          { type: "enemy", x: 400, y: groundY-50, speed: 3, health: -10, score: 100 },
          { type: "enemy", x: 800, y: groundY-50, speed: 3, health: -10, score: 100 },
          { type: "enemy", x: 1200, y: groundY-50, speed: 3, health: -10, score: 100 },

          { type: "reward", x: 600, y: groundY-50, speed: 3, health: 10 },

          { type: "level", x: 2000, y: groundY-50, speed: 3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
