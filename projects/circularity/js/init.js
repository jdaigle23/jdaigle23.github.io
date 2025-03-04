var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ////////////////////////////////////////////////////////////
    ///////////////// PROGRAM SETUP ////////////////////////////
    ////////////////////////////////////////////////////////////

    // TODO 1 : Declare and initialize our variables
    var circle; //variable to hold a single circle when creating circles
    var circles = []; //variable to store all circles in one array
    // TODO 2 : Create a function that draws a circle
    function drawCircle() {
      circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);//draws a circle in a random location on the canvas
      physikz.addRandomVelocity(circle, canvas);//gives the drawn circle a random speed based on the pre-existing function
      view.addChild(circle);//allows the circle to be seen on the canvas
      circles.push(circle);//adds the circle to the circles array using the .push method
    }

    // TODO 3 / 7 : Call the drawCircle() function
    /*
    drawCircle();//draws a circle
    drawCircle();//draws a circle
    drawCircle();//draws a circle
    drawCircle();//draws a circle
    drawCircle();//draws a circle
    */

    for (var i = 0; i <= 100; i++) {
        drawCircle(circles[i]);
    }//draws 100 circles in a loop
    ////////////////////////////////////////////////////////////
    ///////////////// PROGRAM LOGIC ////////////////////////////
    ////////////////////////////////////////////////////////////

    /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
    function update() {
      // TODO 4 : Update the circle's position //
      /*
      physikz.updatePosition(circles[0])//moves the circle
      physikz.updatePosition(circles[1])//moves the circle
      physikz.updatePosition(circles[2])//moves the circle
      physikz.updatePosition(circles[3])//moves the circle
      physikz.updatePosition(circles[4])//moves the circle
      */
      // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
      /*
      game.checkCirclePosition(circles[0])//makes the circle disappear on one side and appear on the other
      game.checkCirclePosition(circles[1])//makes the circle disappear on one side and appear on the other
      game.checkCirclePosition(circles[2])//makes the circle disappear on one side and appear on the other
      game.checkCirclePosition(circles[3])//makes the circle disappear on one side and appear on the other
      game.checkCirclePosition(circles[4])//makes the circle disappear on one side and appear on the other
      */
      // TODO 9 : Iterate over the array
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i])
      }//moves the circles and makes them disappear on one side and appear on the other for every circle in the circles array
    }

    /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
    game.checkCirclePosition = function (circle) {
      // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
      if (circle.x > canvas.width) {
        circle.x = 0;
      }

      // TODO 6 : YOUR CODE STARTS HERE //////////////////////
      if (circle.x < 0) {
        circle.x = canvas.width;
      }//if the circle has gone past the left side of the screen, it reappears on the right side
      if (circle.y > canvas.height) {
        circle.y = 0;
      }//if the circle has gone past the bottom side of the screen, it reappears on the top
      if (circle.y < 0) {
        circle.y = canvas.height;
      }//if the circle has gone past the top side of the screen, it reappears on the bottom
      // YOUR TODO 6 CODE ENDS HERE //////////////////////////
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circle = circle;
    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = init;
}
