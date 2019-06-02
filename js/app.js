// Enemy class
var Enemy = function (x, y, speed) {

    // The enemy X & Y corrdinator, its image and speed variable
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// The update function responsible for enemy movements, speed calculation & collision
Enemy.prototype.update = function (dt) {

    this.x += this.speed * dt;

    // enemies will re-appear when off-canvas in random speed
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 200);
    };

    // Check when collision occure:
    // similar concept from Stackoverflow: https://stackoverflow.com/questions/13916966/
    if (player.x < this.x + 50 &&
        player.x + 50 > this.x &&
        player.y < this.y + 30 &&
        player.y + 30 > this.y) {
        player.x = 200;
        player.y = 420;
    };
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

    // Player image source
    this.sprite = 'images/char-cat-girl.png';
};
// The player update function responsible for player movements
Player.prototype.update = function (dt) {

};

// Draw the player on the screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Array for all enemies
let allEnemies = [];

// Position of the enemies on the y axis
let enemyPositionY = [58, 145, 230];
enemyPositionY.forEach(function (y) {
    let enemy = new Enemy(0, y, 250);
    allEnemies.push(enemy);
});

// The starting position of the player
let player = new Player(200, 420)

Player.prototype.handleInput = function (keyboardKeys) {

    // Move player object Left on the x axis when using keyboard left arrow key
    // and remain within game boarder
    if (keyboardKeys == 'left' && this.x > 0) {
        this.x -= 105;
    };

    // Move player object Right on the x axis when using keyboard right arrow key
    // and remain within game boarder
    if (keyboardKeys == 'right' && this.x < 405) {
        this.x += 105;
    };

    // Move player object Up on the y axis when using keyboard up arrow key
    // and remain within game boarder
    if (keyboardKeys == 'up' && this.y > 0) {
        this.y -= 90;
    };

    // Move player object Down on the y axis when using keyboard down arrow key
    // and remain within game boarder
    if (keyboardKeys == 'down' && this.y < 405) {
        this.y += 90;
    };

    // Reset player position when reaching the water
    if (this.y < 0) {
        setTimeout(() => {

            // The Modal from https://www.w3schools.com/howto/howto_css_modals.asp
            let modal = document.getElementById('myModal');
            let modalContent = document.querySelector('.modal-content')
            let htmlTextToAdd = `Congratulations, you won the game !`;
            modalContent.insertAdjacentHTML('beforeend', htmlTextToAdd);

            //Exit message button
            let btnToAdd = `<br/><button id="myBtn">Exit !</button>`
            modalContent.insertAdjacentHTML('beforeend', btnToAdd);
            modal.style.display = "block";

            // When the user clicks the button, exit the message and play again
            let btn = document.getElementById("myBtn");
            btn.onclick = function () {
                let modalContent = document.querySelector('.modal-content')
                modalContent.innerHTML = '';
                modal.style.display = "none";
            }
            this.x = 200;
            this.y = 420;
        }, 100);
    };
}

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
