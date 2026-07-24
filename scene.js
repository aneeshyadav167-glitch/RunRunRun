// ======================================
// SCENE.JS
// Creates Scene, Camera, Renderer & Light
// ======================================

const container = document.getElementById("gameContainer");

// ---------- Scene ----------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

// ---------- Camera ----------

const camera = new THREE.PerspectiveCamera(
    65,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);

camera.position.set(0, 6, 10);
camera.lookAt(0, 1, 0);

// ---------- Renderer ----------

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

container.appendChild(renderer.domElement);

// ---------- Ambient Light ----------

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.2
);

scene.add(ambientLight);

// ---------- Sun Light ----------

const sun = new THREE.DirectionalLight(
    0xffffff,
    1.5
);

sun.position.set(20, 30, 20);

sun.castShadow = true;

sun.shadow.mapSize.width = 2048;
sun.shadow.mapSize.height = 2048;

scene.add(sun);

// ---------- Resize ----------

window.addEventListener("resize", () => {

    const w = container.clientWidth;
    const h = container.clientHeight;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);

});

// ---------- Export Globally ----------

window.scene = scene;
window.camera = camera;
window.renderer = renderer;
window.sun = sun;
window.clock = new THREE.Clock();
