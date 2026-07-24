// ======================================
// ROAD.JS
// 3 Lane Road Generator
// ======================================

const ROAD_WIDTH = 9;
const LANE_WIDTH = 3;

const TILE_LENGTH = 30;
const TILE_COUNT = 20;

const roadTiles = [];

// ---------- Materials ----------

const roadMaterial = new THREE.MeshLambertMaterial({
    color:0x3a3a3a
});

const sideMaterial = new THREE.MeshLambertMaterial({
    color:0x3dbb57
});

const lineMaterial = new THREE.MeshLambertMaterial({
    color:0xffffff
});

// ---------- Create Tile ----------

function createRoadTile(z){

    const group = new THREE.Group();

    // Road

    const road = new THREE.Mesh(

        new THREE.BoxGeometry(
            ROAD_WIDTH,
            0.2,
            TILE_LENGTH
        ),

        roadMaterial

    );

    road.receiveShadow = true;

    group.add(road);

    // Left Grass

    const leftGrass = new THREE.Mesh(

        new THREE.BoxGeometry(
            20,
            0.18,
            TILE_LENGTH
        ),

        sideMaterial

    );

    leftGrass.position.x = -14.5;

    group.add(leftGrass);

    // Right Grass

    const rightGrass = leftGrass.clone();

    rightGrass.position.x = 14.5;

    group.add(rightGrass);

    // Lane Line Left

    const line1 = new THREE.Mesh(

        new THREE.BoxGeometry(
            0.12,
            0.03,
            2
        ),

        lineMaterial

    );

    // Lane Line Right

    const line2 = line1.clone();

    line1.position.x = -1.5;
    line2.position.x = 1.5;

    // Broken Lines

    for(let i=-14;i<=14;i+=4){

        const a=line1.clone();
        a.position.z=i;
        group.add(a);

        const b=line2.clone();
        b.position.z=i;
        group.add(b);

    }

    group.position.z = z;

    scene.add(group);

    roadTiles.push(group);

}

// ---------- Initial Road ----------

for(let i=0;i<TILE_COUNT;i++){

    createRoadTile(
        -i*TILE_LENGTH
    );

}

// ---------- Export ----------

window.roadTiles = roadTiles;

window.ROAD_WIDTH = ROAD_WIDTH;

window.LANE_WIDTH = LANE_WIDTH;

window.TILE_LENGTH = TILE_LENGTH;

window.TILE_COUNT = TILE_COUNT;
