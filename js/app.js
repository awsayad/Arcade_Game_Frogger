// Enemy class
var Enemy = function (x, y, speed) {

    // The enemy variables including, X & Y corrdinator, an image and Speed variable
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// This function will assist with enemies movements
Enemy.prototype.update = function (dt) {

    this.x += this.speed * dt;

    // enemies will re-appear when off-canvas in random speed
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 200);
    };

    // Need to check when collision occure:

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player class
var Player = function (x, y) {

    // Player X & Y corrdinators
    this.x = x;
    this.y = y;

    // Player image
    this.sprite = 'image/char-boy.png';
};

Player.prototype.update = function (dt) {

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput(keyClick)
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [];
let player = new Player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
