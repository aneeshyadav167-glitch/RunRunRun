// ======================================
// SCORE.JS
// Score Manager
// ======================================

// ----------------------------
// Variables
// ----------------------------

let highScore =
Number(
localStorage.getItem(
"runnerHighScore"
)
) || 0;

// ----------------------------
// UI
// ----------------------------

const scoreUI =
document.getElementById("score");

const distanceUI =
document.getElementById("distance");

// ----------------------------
// Update Score
// ----------------------------

function updateScoreUI(){

scoreUI.innerHTML=
"Score : "+
score;

distanceUI.innerHTML=
"Distance : "+
Math.floor(distance)+
" m";

}

// ----------------------------
// Add Score
// ----------------------------

function addScore(value){

score+=value;

updateScoreUI();

}

// ----------------------------
// High Score
// ----------------------------

function saveHighScore(){

if(score>highScore){

highScore=score;

localStorage.setItem(

"runnerHighScore",

highScore

);

}

}

// ----------------------------
// Game Over
// ----------------------------

function finishGame(){

saveHighScore();

}

// ----------------------------
// Reset
// ----------------------------

function resetScore(){

score=0;

distance=0;

updateScoreUI();

}

// ----------------------------
// Animation
// ----------------------------

function updateHUD(){

updateScoreUI();

}

// ----------------------------
// Export
// ----------------------------

window.addScore=addScore;

window.finishGame=finishGame;

window.resetScore=resetScore;

window.updateHUD=updateHUD;
