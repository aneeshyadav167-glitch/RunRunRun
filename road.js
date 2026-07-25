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
// ------------------------------------------------------
// Road Reset
// ------------------------------------------------------

Game.Road.reset=function(){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

Game.Road.tiles[i].position.z=

-i*

CONFIG.TILE_LENGTH;

}

};

// ------------------------------------------------------
// Get Tile By Index
// ------------------------------------------------------

Game.Road.getTile=function(index){

return Game.Road.tiles[index];

};

// ------------------------------------------------------
// Get Total Tiles
// ------------------------------------------------------

Game.Road.count=function(){

return Game.Road.tiles.length;

};

// ------------------------------------------------------
// Add Road To Scene
// ------------------------------------------------------

Game.Road.addAll=function(){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

if(

!Game.scene.children.includes(

Game.Road.tiles[i]

)

){

Game.scene.add(

Game.Road.tiles[i]

);

}

}

};

// ------------------------------------------------------
// Remove All Tiles
// ------------------------------------------------------

Game.Road.removeAll=function(){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

Game.scene.remove(

Game.Road.tiles[i]

);

}

};

// ------------------------------------------------------
// Initialize Road
// ------------------------------------------------------

Game.Road.init=function(){

Game.Road.createInitial();

Game.Road.addAll();

};

console.log(

"Road System Ready"

);
// ------------------------------------------------------
// Get Road Width
// ------------------------------------------------------

Game.Road.getWidth=function(){

return CONFIG.ROAD_WIDTH;

};

// ------------------------------------------------------
// Get Lane Position
// ------------------------------------------------------

Game.Road.getLanePosition=function(lane){

return Game.LANES[lane];

};

// ------------------------------------------------------
// Is Position On Road
// ------------------------------------------------------

Game.Road.isOnRoad=function(x){

return (

x>=-(CONFIG.ROAD_WIDTH/2)

&&

x<=(CONFIG.ROAD_WIDTH/2)

);

};

// ------------------------------------------------------
// Get Tile From Z Position
// ------------------------------------------------------

Game.Road.getTileFromZ=function(z){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

const tile=

Game.Road.tiles[i];

const min=

tile.position.z-

(CONFIG.TILE_LENGTH/2);

const max=

tile.position.z+

(CONFIG.TILE_LENGTH/2);

if(

z>=min

&&

z<=max

){

return tile;

}

}

return null;

};

// ------------------------------------------------------
// Future Object Spawn Hook
// ------------------------------------------------------

Game.Road.spawnHook=function(tile){

// Coins, Stones and Gates
// will be attached here
// by objects.js

};

// ------------------------------------------------------
// Call Spawn Hook After Recycle
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

Game.Road.spawnHook(

first

);

}

};

// ------------------------------------------------------
// Update Road
// ------------------------------------------------------

Game.Road.update=function(){

Game.Road.move(

Game.STATE.speed

);

Game.Road.recycle();

};
// ------------------------------------------------------
// Enable Shadows
// ------------------------------------------------------

Game.Road.enableShadows=function(){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

Game.Road.tiles[i].traverse(function(child){

if(child.isMesh){

child.receiveShadow=true;

child.castShadow=false;

}

});

}

};

// ------------------------------------------------------
// Set Road Speed
// ------------------------------------------------------

Game.Road.setSpeed=function(speed){

Game.STATE.speed=speed;

};

// ------------------------------------------------------
// Get Road Speed
// ------------------------------------------------------

Game.Road.getSpeed=function(){

return Game.STATE.speed;

};

// ------------------------------------------------------
// Pause Road
// ------------------------------------------------------

Game.Road.pause=function(){

Game.STATE.running=false;

};

// ------------------------------------------------------
// Resume Road
// ------------------------------------------------------

Game.Road.resume=function(){

Game.STATE.running=true;

};

// ------------------------------------------------------
// Reset Speed
// ------------------------------------------------------

Game.Road.resetSpeed=function(){

Game.STATE.speed=

CONFIG.WORLD_SPEED;

};

// ------------------------------------------------------
// Increase Speed Slowly
// ------------------------------------------------------

Game.Road.increaseSpeed=function(){

if(

Game.STATE.speed<

CONFIG.MAX_WORLD_SPEED

){

Game.STATE.speed+=

CONFIG.SPEED_INCREMENT;

}

};

// ------------------------------------------------------
// Main Update
// ------------------------------------------------------

Game.Road.tick=function(){

if(

!Game.STATE.running

){

return;

}

Game.Road.increaseSpeed();

Game.Road.update();

};

// ------------------------------------------------------
// Dispose
// ------------------------------------------------------

Game.Road.dispose=function(){

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

Game.scene.remove(

Game.Road.tiles[i]

);

}

Game.Road.tiles=[];

};
// ------------------------------------------------------
// Initialize Road System
// ------------------------------------------------------

Game.Road.start=function(){

Game.Road.createInitial();

Game.Road.enableShadows();

};

// ------------------------------------------------------
// Restart Road
// ------------------------------------------------------

Game.Road.restart=function(){

Game.Road.dispose();

Game.Road.resetSpeed();

Game.Road.createInitial();

Game.Road.enableShadows();

};

// ------------------------------------------------------
// Get Nearest Tile
// ------------------------------------------------------

Game.Road.getNearestTile=function(){

let nearest=null;

let distance=Infinity;

for(

let i=0;

i<Game.Road.tiles.length;

i++

){

const tile=

Game.Road.tiles[i];

const d=

Math.abs(

tile.position.z

);

if(

d<distance

){

distance=d;

nearest=tile;

}

}

return nearest;

};

// ------------------------------------------------------
// Update Every Frame
// ------------------------------------------------------

Game.Road.frame=function(){

if(

!Game.STATE.running

){

return;

}

Game.Road.tick();

};

// ------------------------------------------------------
// Auto Initialize
// ------------------------------------------------------

Game.Road.start();

// ------------------------------------------------------
// Export
// ------------------------------------------------------

window.Game.Road=

Game.Road;

// ------------------------------------------------------
// Ready
// ------------------------------------------------------

console.log(

"road.js loaded successfully"

);