import * as THREE from 'three';

const scene = new THREE.Scene();

scene.background=new THREE.Color(0x87ceeb);

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);


// Light

const light=new THREE.DirectionalLight(0xffffff,2);

light.position.set(10,20,10);

scene.add(light);


// Road

const road=new THREE.Mesh(

new THREE.BoxGeometry(6,0.2,200),

new THREE.MeshStandardMaterial({
color:0x555555
})

);

scene.add(road);


// Grass

const grassLeft=new THREE.Mesh(

new THREE.BoxGeometry(30,0.1,200),

new THREE.MeshStandardMaterial({
color:0x33aa33
})

);

grassLeft.position.x=-18;

scene.add(grassLeft);


const grassRight=grassLeft.clone();

grassRight.position.x=18;

scene.add(grassRight);


// Player

const player=new THREE.Mesh(

new THREE.BoxGeometry(1,2,1),

new THREE.MeshStandardMaterial({
color:0xff4444
})

);

player.position.y=1;

scene.add(player);


// Camera

camera.position.set(0,5,8);

camera.lookAt(player.position);


// Animation

function animate(){

requestAnimationFrame(animate);

player.position.z-=0.2;

camera.position.z=player.position.z+8;

camera.lookAt(player.position);

animateRoad();

renderer.render(scene,camera);

}

function animateRoad(){

road.position.z=player.position.z-90;

grassLeft.position.z=road.position.z;

grassRight.position.z=road.position.z;

}

animate();
