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
          { type: "obstacle", x: 600, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0},
          { type: "obstacle", x: 900, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0},
          { type: "obstacle", x: 1200, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0 },
          { type: "obstacle", x: 800, y: groundY-580, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 2400, y: groundY-1000, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 1500, y: groundY-1700, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 3000, y: groundY-1700, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 4000, y: groundY-2800, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },

          { type: "enemy", x: 400, y: groundY-120, speed: 2, health: -10, score: 100, image: "img/soldier.png", scale: 0.2, hitSize: 80 },
          { type: "enemy", x: 1000, y: groundY-120, speed: 2, health: -10, score: 100, image: "img/soldier.png", scale: 0.2, hitSize: 80 },
          { type: "enemy", x: 1600, y: groundY-120, speed: 2, health: -10, score: 100, image: "img/soldier.png", scale: 0.2, hitSize: 80 },

          { type: "reward", x: 600, y: groundY-90, speed: 2, health: 10, image: "img/book.png", scale: 0.2},
          { type: "reward", x: 900, y: groundY-90, speed: 2, health: 10, image: "img/book.png", scale: 0.2},
          { type: "reward", x: 1400, y: groundY-90, speed: 2, health: 10, image: "img/book.png", scale: 0.2},

          { type: "level", x: 1800, y: groundY-100, speed: 2, image: "img/portal.png", scale: 0.2},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 1600, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0},
          { type: "obstacle", x: 1900, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0},
          { type: "obstacle", x: 2200, y: groundY, hitSize: 25, damage: 10, image: "img/alien.stuff.png", scale: 0.2, speedX: 0, speedY: 0 },
          { type: "obstacle", x: 1800, y: groundY-580, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 3400, y: groundY-1000, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 2500, y: groundY-1700, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 4000, y: groundY-1700, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },
          { type: "obstacle", x: 5000, y: groundY-2800, hitSize: 25, damage: 10, image: "img/meteorite.png", scale: 0.2, speedX: 4, speedY: 4 },

          { type: "enemy", x: 1400, y: groundY-140, speed: 2, health: -10, score: 100, image: "img/viltrumite.png", scale: 0.4, hitSize: 80 },
          { type: "enemy", x: 2000, y: groundY-140, speed: 2, health: -10, score: 100, image: "img/viltrumite.png", scale: 0.4, hitSize: 80 },
          { type: "enemy", x: 2600, y: groundY-140, speed: 2, health: -10, score: 100, image: "img/viltrumite.png", scale: 0.4, hitSize: 80 },

          { type: "reward", x: 1600, y: groundY-90, speed: 2, health: 10, image: "img/camera.png", scale: 0.2},
          { type: "reward", x: 1900, y: groundY-90, speed: 2, health: 10, image: "img/camera.png", scale: 0.2},
          { type: "reward", x: 2400, y: groundY-90, speed: 2, health: 10, image: "img/camera.png", scale: 0.2},
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
