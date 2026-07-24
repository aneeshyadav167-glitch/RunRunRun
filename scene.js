// ======================================
// SCENE.JS
// Scene + Camera + Renderer
// ======================================

// ------------------------------
// Container
// ------------------------------

const game=document.getElementById("game");

// ------------------------------
// Scene
// ------------------------------

const scene=new THREE.Scene();

scene.background=new THREE.Color(

CONFIG.SKY_COLOR

);

// ------------------------------
// Camera
// ------------------------------

const camera=new THREE.PerspectiveCamera(

65,

game.clientWidth/game.clientHeight,

0.1,

1000

);

camera.position.set(

0,

CONFIG.CAMERA_HEIGHT,

CONFIG.CAMERA_DISTANCE

);

// ------------------------------
// Renderer
// ------------------------------

const renderer=new THREE.WebGLRenderer({

antialias:true,

alpha:false

});

renderer.setPixelRatio(

Math.min(window.devicePixelRatio,2)

);

renderer.setSize(

game.clientWidth,

game.clientHeight

);

renderer.shadowMap.enabled=true;

renderer.shadowMap.type=

THREE.PCFSoftShadowMap;

game.appendChild(

renderer.domElement

);

// ------------------------------
// Ambient Light
// ------------------------------

const ambientLight=

new THREE.AmbientLight(

0xffffff,

CONFIG.AMBIENT_INTENSITY

);

scene.add(

ambientLight

);

// ------------------------------
// Sun Light
// ------------------------------

const sunLight=

new THREE.DirectionalLight(

0xffffff,

CONFIG.SUN_INTENSITY

);

sunLight.position.set(

25,

40,

20

);

sunLight.castShadow=true;

sunLight.shadow.mapSize.width=2048;

sunLight.shadow.mapSize.height=2048;

sunLight.shadow.camera.left=-50;

sunLight.shadow.camera.right=50;

sunLight.shadow.camera.top=50;

sunLight.shadow.camera.bottom=-50;

scene.add(

sunLight

);

// ------------------------------
// Resize
// ------------------------------

function resize(){

const w=game.clientWidth;

const h=game.clientHeight;

camera.aspect=w/h;

camera.updateProjectionMatrix();

renderer.setSize(

w,

h

);

}

window.addEventListener(

"resize",

resize

);

// ------------------------------
// Clock
// ------------------------------

const clock=

new THREE.Clock();

// ------------------------------
// Export
// ------------------------------

window.scene=scene;

window.camera=camera;

window.renderer=renderer;

window.clock=clock;

window.sunLight=sunLight;

window.ambientLight=

ambientLight;