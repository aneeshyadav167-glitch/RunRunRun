// ======================================
// OBJECTS.JS
// Coins + Stones + Gates
// ======================================

const objectsGroup = new THREE.Group();
scene.add(objectsGroup);

const coins = [];
const obstacles = [];

// --------------------------------------
// Materials
// --------------------------------------

const coinMaterial = new THREE.MeshLambertMaterial({
    color:0xffd700
});

const stoneMaterial = new THREE.MeshLambertMaterial({
    color:0x666666
});

const gateMaterial = new THREE.MeshLambertMaterial({
    color:0xaa5522
});

// --------------------------------------
// Coin
// --------------------------------------

function createCoin(x,z){

    const coin = new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.35,
            0.35,
            0.12,
            20
        ),

        coinMaterial

    );

    coin.rotation.x=Math.PI/2;

    coin.position.set(
        x,
        1.1,
        z
    );

    coin.userData.type="coin";

    objectsGroup.add(coin);

    coins.push(coin);

}

// --------------------------------------
// Stone
// --------------------------------------

function createStone(x,z){

    const stone=new THREE.Mesh(

        new THREE.DodecahedronGeometry(
            0.55
        ),

        stoneMaterial

    );

    stone.position.set(
        x,
        0.55,
        z
    );

    stone.castShadow=true;

    stone.userData.type="stone";

    objectsGroup.add(stone);

    obstacles.push(stone);

}

// --------------------------------------
// Gate
// --------------------------------------

function createGate(x,z){

    const gate=new THREE.Group();

    const left=new THREE.Mesh(

        new THREE.BoxGeometry(
            0.25,
            2.2,
            0.25
        ),

        gateMaterial

    );

    left.position.set(-0.7,1.1,0);

    const right=left.clone();

    right.position.x=0.7;

    const top=new THREE.Mesh(

        new THREE.BoxGeometry(
            1.7,
            0.25,
            0.25
        ),

        gateMaterial

    );

    top.position.y=2.2;

    gate.add(left);
    gate.add(right);
    gate.add(top);

    gate.position.set(
        x,
        0,
        z
    );

    gate.userData.type="gate";

    objectsGroup.add(gate);

    obstacles.push(gate);

}

// --------------------------------------
// Random Generation
// --------------------------------------

function generateObjects(){

    for(let z=-20;z>-650;z-=6){

        const lane=Math.floor(Math.random()*3);

        const x=(lane-1)*LANE_WIDTH;

        const r=Math.random();

        if(r<0.45){

            createCoin(x,z);

        }

        else if(r<0.75){

            createStone(x,z);

        }

        else{

            createGate(x,z);

        }

    }

}

generateObjects();

// --------------------------------------
// Animation
// --------------------------------------

function updateObjects(){

    for(const coin of coins){

        coin.rotation.z+=0.08;

        coin.position.y=
        1.1+
        Math.sin(
            performance.now()*0.005+
            coin.position.z
        )*0.15;

    }

}

// --------------------------------------
// Export
// --------------------------------------

window.coins=coins;
window.obstacles=obstacles;
window.updateObjects=updateObjects;
