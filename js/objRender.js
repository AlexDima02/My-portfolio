import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

console.log(GLTFLoader);
console.log(OrbitControls);
let container;
let containerArr;
let camera;
let aspect;
let renderer;
let scene;
let house;
let control;

function init(){

    container = document.querySelectorAll('#web-gl-item');
    containerArr = [...container];
    console.log(containerArr);

// Scene
    scene = new THREE.Scene();

// Camera
const fov = 35;
// const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 1000;

// camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// camera.position.set(0, 0, 180);

// Light
const ambient = new THREE.AmbientLight(0x404040, 3);
scene.add(ambient);

// // Renderer
// renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
// renderer.setSize(container.clientWidth, container.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// // Control the cmaera and position of the object
// const control = new OrbitControls(camera, renderer.domElement);

// container.appendChild(renderer.domElement);

// Loading the object - Loader
let loader = new GLTFLoader();

containerArr.forEach((item, id) => {

    switch(id){
        case 0:
            // Camera
            aspect = item.clientWidth / item.clientHeight;
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 0, 180);
            
            // Renderer
            renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setSize(item.clientWidth, item.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Control the cmaera and position of the object
            control = new OrbitControls(camera, renderer.domElement);

            item.appendChild(renderer.domElement);

            // Load object
            loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

                console.log(gltf.scene);
                house = gltf.scene.children[0];
                scene.add(gltf.scene);
                animate();
            })
            

        break;
        case 1:
            // Camera
            aspect = item.clientWidth / item.clientHeight;
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 0, 180);
            
            // Renderer
            renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
            renderer.setSize(item.clientWidth, item.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Control the cmaera and position of the object
            control = new OrbitControls(camera, renderer.domElement);

            item.appendChild(renderer.domElement);

            // Load object
            loader.load('../three-js/weight-assets/scene.gltf', function(gltf){

                console.log(gltf.scene);
                house = gltf.scene.children[0];
                scene.add(gltf.scene);
                animate();
            })
            

        break;




    }


})

// loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

//     console.log(gltf.scene);
//     house = gltf.scene.children[0];
//     scene.add(gltf.scene);
//     animate();
// })

}

function animate(){

    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene, camera);

}

init();
