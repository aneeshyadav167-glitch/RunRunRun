// ======================================
// CONTROLS.JS
// Mobile Swipe + Keyboard Controls
// ======================================

// ---------- Touch Variables ----------

let touchStartX = 0;
let touchStartY = 0;

let touchEndX = 0;
let touchEndY = 0;

const MIN_SWIPE_DISTANCE = 40;

// ---------- Touch Start ----------

window.addEventListener("touchstart",(e)=>{

    const touch = e.touches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;

},{passive:true});

// ---------- Touch End ----------

window.addEventListener("touchend",(e)=>{

    const touch = e.changedTouches[0];

    touchEndX = touch.clientX;
    touchEndY = touch.clientY;

    handleSwipe();

},{passive:true});

// ---------- Swipe Detection ----------

function handleSwipe(){

    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    // Ignore very small swipe

    if(
        Math.abs(dx) < MIN_SWIPE_DISTANCE &&
        Math.abs(dy) < MIN_SWIPE_DISTANCE
    ){
        return;
    }

    // Horizontal Swipe

    if(Math.abs(dx) > Math.abs(dy)){

        if(dx > 0){

            moveRight();

        }else{

            moveLeft();

        }

    }

    // Vertical Swipe

    else{

        if(dy < 0){

            jump();

        }

    }

}

// ======================================
// KEYBOARD (Testing)
// ======================================

window.addEventListener("keydown",(e)=>{

    switch(e.code){

        case "ArrowLeft":
        case "KeyA":

            moveLeft();
            break;

        case "ArrowRight":
        case "KeyD":

            moveRight();
            break;

        case "ArrowUp":
        case "Space":
        case "KeyW":

            jump();
            break;

    }

});

// ======================================
// DOUBLE TAP JUMP
// ======================================

let lastTap = 0;

window.addEventListener("touchend",()=>{

    const now = Date.now();

    if(now - lastTap < 250){

        jump();

    }

    lastTap = now;

});

// ======================================
// PREVENT SCROLL
// ======================================

document.body.addEventListener(

    "touchmove",

    function(e){

        e.preventDefault();

    },

    {passive:false}

);

// ======================================
// EXPORT
// ======================================

window.handleSwipe = handleSwipe;
