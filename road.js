// ======================================================
// ROAD.JS
// Part 1 / 6
// Road Materials + Road Tile + Lane Lines
// ======================================================

window.Game = window.Game || {};

const CONFIG = Game.CONFIG;

Game.Road = {};

Game.Road.tiles = [];

Game.Road.material = new THREE.MeshLambertMaterial({

    color:CONFIG.ROAD_COLOR

});

Game.Road.grassMaterial = new THREE.MeshLambertMaterial({

    color:CONFIG.GRASS_COLOR

});

Game.Road.lineMaterial = new THREE.MeshLambertMaterial({

    color:CONFIG.LINE_COLOR

});

// ------------------------------------------------------
// Create Single Road Tile
// ------------------------------------------------------

Game.Road.createTile=function(z){

const group=new THREE.Group();

// ----------------------
// Road
// ----------------------

const road=new THREE.Mesh(

new THREE.BoxGeometry(

CONFIG.ROAD_WIDTH,

0.2,

CONFIG.TILE_LENGTH

),

Game.Road.material

);

road.receiveShadow=true;

group.add(road);

// ----------------------
// Left Grass
// ----------------------

const grassLeft=new THREE.Mesh(

new THREE.BoxGeometry(

18,

0.1,

CONFIG.TILE_LENGTH

),

Game.Road.grassMaterial

);

grassLeft.position.x=

-13.5;

grassLeft.position.y=

-0.05;

group.add(

grassLeft

);

// ----------------------
// Right Grass
// ----------------------

const grassRight=

grassLeft.clone();

grassRight.position.x=

13.5;

group.add(

grassRight

);

// ------------------------------------------------------
// Lane Markings
// ------------------------------------------------------

const lineGeometry=

new THREE.BoxGeometry(

0.15,

0.03,

2

);

for(

let lane=1;

lane<CONFIG.LANE_COUNT;

lane++

){

const divider=

new THREE.Mesh(

lineGeometry,

Game.Road.lineMaterial

);

divider.position.x=

-CONFIG.ROAD_WIDTH/2+

lane*

CONFIG.LANE_WIDTH;

divider.position.y=

0.12;

divider.position.z=

-8;

group.add(

divider

);

const divider2=

divider.clone();

divider2.position.z=

0;

group.add(

divider2

);

const divider3=

divider.clone();

divider3.position.z=

8;

group.add(

divider3

);

}

group.position.z=z;

Game.scene.add(

group

);

Game.Road.tiles.push(

group

);

return group;

};