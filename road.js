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
// ------------------------------------------------------
// Create Initial Road
// ------------------------------------------------------

Game.Road.createInitial=function(){

Game.Road.tiles=[];

for(

let i=0;

i<CONFIG.ROAD_TILE_COUNT;

i++

){

Game.Road.createTile(

-i*CONFIG.TILE_LENGTH

);

}

};

// ------------------------------------------------------
// Get Last Tile
// ------------------------------------------------------

Game.Road.getLastTile=function(){

return Game.Road.tiles[
Game.Road.tiles.length-1
];

};

// ------------------------------------------------------
// Move Road
// ------------------------------------------------------

Game.Road.move=function(speed){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

Game.Road.tiles[i].position.z+=speed;

}

};

// ------------------------------------------------------
// Recycle Tiles
// ------------------------------------------------------

Game.Road.recycle=function(){

const first=

Game.Road.tiles[0];

if(

first.position.z>

CONFIG.TILE_LENGTH

){

const last=

Game.Road.getLastTile();

first.position.z=

last.position.z-

CONFIG.TILE_LENGTH;

Game.Road.tiles.push(

Game.Road.tiles.shift()

);

}

};

// ------------------------------------------------------
// Update
// ------------------------------------------------------

Game.Road.update=function(){

Game.Road.move(

Game.STATE.speed

);

Game.Road.recycle();

};