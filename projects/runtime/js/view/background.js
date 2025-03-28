var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'black');//draws a rectangle as the background stored in a variable backgroundFill
            background.addChild(backgroundFill);//adds the background rectangle to the background container to make it visible
            
            // TODO 2: - Add a moon and starfield
            

            for (var i = 0; i < 250; i++){
                var circle = draw.circle(1, "white", "LightGray", 2);//create a circle with a specified radius, border color, fill color, and the alpha and storing it in a variable
                circle.x = canvasWidth * Math.random();//gives the circle a radom x - value within the canvasWidth bound
                circle.y = groundY * Math.random();//gives the circle a radom y - value within the groundY bound
                background.addChild(circle);//adds all the attributes to the background container
            }

            var moon = draw.bitmap("img/moon.png");//creates a bitmap object using the moon image and sotres it in the moon vraibale
            moon.x = canvas.width-700;//sets the moon x position
            moon.y = canvas.height-900;//sets the mon y position
            moon.scaleX = 0.6;//scales the moon width
            moon.scaleY = 0.6;//sacles the moon height
            background.addChild(moon);//adds the moon to the background container
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 10; ++i) {
                var buildingColors = ["red", "blue", "yellow", "orange", "purple", "red", "blue", "yellow", "orange", "purple"]
                var buildingHeight = 300 * Math.random();//assign 300 to the buildingHeight variable
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);//draws a rectangle with 75 width, buildingHeight for the height, lightGray for the fill color, black for the outline, and 1 for the outline width
                building.x = 200 * i;//mulitply 200 by the current i value and store it as the x position of the building
                building.y = groundY - buildingHeight;//takes the groundY and subtracts the building height and stores that as the y value
                background.addChild(building);//adds the building to the background container
                buildings.push(building);//adds the buliding to the buildings array for further manipulation
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//creates a bitmap for the tree image and stores it in the variable tree
            tree.x = canvasWidth-300;//place the tree on the canvas in relation to the canvasWidth bound
            tree.y = groundY-225;//place the tree on the canvas in relation to the groundY bound
            background.addChild(tree);//add the tree to the background container
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 4;//moves the tree to the left by subtracting 4 from its position

            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i]//the individual index of the buildings array stored in a variable 
                building.x --;//subtracts 1 from the x position
                if (building.x < -100){
                    building.x = canvasWidth;//checks if the x position of the buiding is less than -100, and if it's true, then it resets the building to the other side of the canvas
                }
            }
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
