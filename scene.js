// ======================================================
// SCENE.JS
// Scene + Camera + Renderer + Lights
// ======================================================

window.Game = window.Game || {};

const CONFIG = Game.CONFIG;

// ------------------------------------------------------
// Scene
// ------------------------------------------------------

Game.scene = new THREE.Scene();

Game.scene.background = new THREE.Color(
CONFIG.SKY_COLOR
);

// ------------------------------------------------------
// Camera
// ------------------------------------------------------

Game.camera = new THREE.PerspectiveCamera(

65,

9/16,

0.1,

1000

);

Game.camera.position.set(

0,

CONFIG.CAMERA_HEIGHT,

CONFIG.CAMERA_DISTANCE

);

// ------------------------------------------------------
// Renderer
// ------------------------------------------------------

const container =
document.getElementById("game");

Game.renderer =
new THREE.WebGLRenderer({

antialias:true,

alpha:false,

powerPreference:"high-performance"

});

Game.renderer.setPixelRatio(

Math.min(
window.devicePixelRatio,
2
)

);

Game.renderer.setSize(

container.clientWidth,

container.clientHeight

);

Game.renderer.shadowMap.enabled=true;

Game.renderer.shadowMap.type=

THREE.PCFSoftShadowMap;

container.appendChild(

Game.renderer.domElement

);

// ------------------------------------------------------
// Ambient Light
// ------------------------------------------------------

Game.ambientLight=

new THREE.AmbientLight(

0xffffff,

CONFIG.AMBIENT_LIGHT

);

Game.scene.add(

Game.ambientLight

);

// ------------------------------------------------------
// Sun Light
// ------------------------------------------------------

Game.sunLight=

new THREE.DirectionalLight(

0xffffff,

CONFIG.SUN_LIGHT

);

Game.sunLight.position.set(

20,

40,

20

);

Game.sunLight.castShadow=true;

Game.sunLight.shadow.mapSize.width=2048;

Game.sunLight.shadow.mapSize.height=2048;

Game.sunLight.shadow.camera.left=-60;

Game.sunLight.shadow.camera.right=60;

Game.sunLight.shadow.camera.top=60;

Game.sunLight.shadow.camera.bottom=-60;

Game.scene.add(

Game.sunLight

);

// ------------------------------------------------------
// Clock
// ------------------------------------------------------

Game.clock=
new THREE.Clock();

// ------------------------------------------------------
// Resize
// ------------------------------------------------------

function resizeGame(){

const w=
container.clientWidth;

const h=
container.clientHeight;

Game.camera.aspect=
w/h;

Game.camera.updateProjectionMatrix();

Game.renderer.setSize(

w,

h

);

}

window.addEventListener(

"resize",

resizeGame

);

// ------------------------------------------------------
// Render
// ------------------------------------------------------

Game.render=function(){

Game.renderer.render(

Game.scene,

Game.camera

);

};

// ------------------------------------------------------
// Helpers
// ------------------------------------------------------

Game.getDelta=function(){

return Game.clock.getDelta();

};

// ------------------------------------------------------
// Ready
// ------------------------------------------------------

console.log(
"Scene Loaded"
);