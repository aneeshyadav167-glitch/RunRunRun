// ======================================
// COLLISION.JS
// Collision + Coin Collection + Game Over
// ======================================

// ----------------------------
// Game Variables
// ----------------------------

let score = 0;
let distance = 0;
let gameOver = false;

const scoreText = document.getElementById("score");
const distanceText = document.getElementById("distance");
const gameOverUI = document.getElementById("gameOver");
const restartBtn = document.getElementById("restartBtn");

// ----------------------------
// Bounding Boxes
// ----------------------------

const playerBox = new THREE.Box3();
const objectBox = new THREE.Box3();

// ----------------------------
// Coin Collection
// ----------------------------

function collectCoin(coin){

    score += 10;

    scoreText.innerHTML =
    "Score : " + score;

    objectsGroup.remove(coin);

    const index = coins.indexOf(coin);

    if(index !== -1){

        coins.splice(index,1);

    }

}

// ----------------------------
// Game Over
// ----------------------------

function endGame(){

    if(gameOver) return;

    gameOver = true;

    gameOverUI.style.display = "block";

}

// ----------------------------
// Collision Check
// ----------------------------

function checkCollision(){

    if(gameOver) return;

    playerBox.setFromObject(player);

    // ---------- Coins ----------

    for(let i=coins.length-1;i>=0;i--){

        const coin = coins[i];

        objectBox.setFromObject(coin);

        if(playerBox.intersectsBox(objectBox)){

            collectCoin(coin);

        }

    }

    // ---------- Obstacles ----------

    for(let i=0;i<obstacles.length;i++){

        objectBox.setFromObject(
            obstacles[i]
        );

        if(playerBox.intersectsBox(objectBox)){

            endGame();

            return;

        }

    }

}

// ----------------------------
// Distance
// ----------------------------

function updateDistance(){

    if(gameOver) return;

    distance += 0.18;

    distanceText.innerHTML =
    "Distance : " +
    Math.floor(distance) +
    " m";

}

// ----------------------------
// Restart
// ----------------------------

restartBtn.onclick=function(){

    location.reload();

};

// ----------------------------
// Export
// ----------------------------

window.score = score;

window.distance = distance;

window.gameOver = gameOver;

window.checkCollision = checkCollision;

window.updateDistance = updateDistance;
