// ======================================
// CITY.JS
// Low Poly Buildings + Street Lights
// ======================================

const cityGroup = new THREE.Group();

scene.add(cityGroup);

const buildingColors = [
    0xcfcfcf,
    0xbdbdbd,
    0xd9d9d9,
    0xe5e5e5,
    0xa8b0ba,
    0xc7d0d8
];

// ---------------------------
// BUILDING
// ---------------------------

function createBuilding(x, z){

    const h = 4 + Math.random() * 10;
    const w = 2 + Math.random() * 2;
    const d = 2 + Math.random() * 2;

    const building = new THREE.Mesh(

        new THREE.BoxGeometry(w, h, d),

        new THREE.MeshLambertMaterial({

            color:buildingColors[
                Math.floor(
                    Math.random()*buildingColors.length
                )
            ]

        })

    );

    building.castShadow = true;
    building.receiveShadow = true;

    building.position.set(
        x,
        h/2,
        z
    );

    cityGroup.add(building);

}

// ---------------------------
// STREET LIGHT
// ---------------------------

function createStreetLight(x,z){

    const pole = new THREE.Mesh(

        new THREE.CylinderGeometry(
            0.06,
            0.08,
            3,
            8
        ),

        new THREE.MeshLambertMaterial({

            color:0x555555

        })

    );

    pole.position.set(
        x,
        1.5,
        z
    );

    pole.castShadow = true;

    cityGroup.add(pole);

    const head = new THREE.Mesh(

        new THREE.BoxGeometry(
            0.35,
            0.15,
            0.35
        ),

        new THREE.MeshLambertMaterial({

            color:0xffffcc

        })

    );

    head.position.set(
        x,
        3.05,
        z
    );

    cityGroup.add(head);

}

// ---------------------------
// GENERATE CITY
// ---------------------------

for(let z = 20; z > -650; z -= 8){

    // Left Side

    for(let i=0;i<3;i++){

        createBuilding(

            -10 - Math.random()*8,

            z + Math.random()*4

        );

    }

    // Right Side

    for(let i=0;i<3;i++){

        createBuilding(

            10 + Math.random()*8,

            z + Math.random()*4

        );

    }

    // Street Lights

    createStreetLight(-5.4,z);

    createStreetLight(5.4,z);

}

// ---------------------------
// EXPORT
// ---------------------------

window.cityGroup = cityGroup;
