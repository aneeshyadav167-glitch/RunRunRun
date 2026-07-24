// ======================================
// PLAYER.JS
// Runner + Camera Follow
// ======================================

// ---------- Player Group ----------

const player = new THREE.Group();

// Body

const body = new THREE.Mesh(

    new THREE.BoxGeometry(0.9,1.3,0.6),

    new THREE.MeshLambertMaterial({
        color:0x00a2ff
    })

);

body.position.y=1.4;
body.castShadow=true;

player.add(body);

// Head

const head=new THREE.Mesh(

    new THREE.BoxGeometry(0.65,0.65,0.65),

    new THREE.MeshLambertMaterial({
        color:0xffd4a3
    })

);

head.position.y=2.45;

player.add(head);

// Left Leg

const legL=new THREE.Mesh(

    new THREE.BoxGeometry(0.22,0.9,0.22),

    new THREE.MeshLambertMaterial({
        color:0x222222
    })

);

legL.position.set(-0.2,0.45,0);

player.add(legL);

// Right Leg

const legR=legL.clone();

legR.position.x=0.2;

player.add(legR);

// Left Arm

const armL=new THREE.Mesh(

    new THREE.BoxGeometry(0.18,0.8,0.18),

    new THREE.MeshLambertMaterial({
        color:0xffd4a3
    })

);

armL.position.set(-0.58,1.6,0);

player.add(armL);

// Right Arm

const armR=armL.clone();

armR.position.x=0.58;

player.add(armR);

// -----------------------------

player.position.set(0,0,3);

scene.add(player);

// ======================================
// LANE SYSTEM
// ======================================

const LANES=[
    -LANE_WIDTH,
    0,
    LANE_WIDTH
];

let currentLane=1;
let targetX=0;

// ======================================
// JUMP
// ======================================

let velocityY=0;
let gravity=0.018;
let jumping=false;

// ======================================
// UPDATE PLAYER
// ======================================

function updatePlayer(){

    // Lane Smooth Move

    player.position.x +=
    (targetX-player.position.x)*0.20;

    // Jump

    if(jumping){

        velocityY-=gravity;

        player.position.y+=velocityY;

        if(player.position.y<=0){

            player.position.y=0;

            velocityY=0;

            jumping=false;

        }

    }

    // Camera Follow

    camera.position.x +=
    (player.position.x-camera.position.x)*0.08;

    camera.position.y=6;

    camera.position.z=
    player.position.z+9;

    camera.lookAt(

        player.position.x,

        1.5,

        player.position.z-8

    );

}

// ======================================
// FUNCTIONS
// ======================================

function moveLeft(){

    if(currentLane>0){

        currentLane--;

        targetX=LANES[currentLane];

    }

}

function moveRight(){

    if(currentLane<2){

        currentLane++;

        targetX=LANES[currentLane];

    }

}

function jump(){

    if(jumping)return;

    jumping=true;

    velocityY=0.34;

}

// ======================================
// EXPORT
// ======================================

window.player=player;

window.updatePlayer=updatePlayer;

window.moveLeft=moveLeft;

window.moveRight=moveRight;

window.jump=jump;
