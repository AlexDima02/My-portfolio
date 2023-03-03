import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import { Color } from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";
import { MeshBasicMaterial } from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";

console.log(GLTFLoader);
console.log(OrbitControls);
// let container;
// let containerArr;
let camera;
let camera2;
let aspect;
let aspect2;
let renderer;
let renderer2;
let house;
let control;
let container;

// Scenes
// let scene;
let scene1 = new THREE.Scene();
let scene2 = new THREE.Scene();

// Camera
const fov = 35;
const near = 0.1;
const far = 500;

// Loading the object - Loader
let loader = new GLTFLoader();

// function init(){

//     container = document.querySelectorAll('#web-gl-item');
//     containerArr = [...container];
//     console.log(containerArr);

//     // Selecting the container
//     // const gamepad = document.querySelector('.gamepad');
//     // const weight = document.querySelector('.weight');
//     const book = document.querySelector('.book');

     

// // Scene
//     // scene = new THREE.Scene();

    

// // // Camera
// // const fov = 35;
// // // const aspect = container.clientWidth / container.clientHeight;
// // const near = 0.1;
// // const far = 1000;

// // camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// // camera.position.set(0, 0, 180);

// // Light
// // const ambient = new THREE.AmbientLight(0x404040, 3);
// // scene.add(ambient);

// // // Renderer
// // renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
// // renderer.setSize(container.clientWidth, container.clientHeight);
// // renderer.setPixelRatio(window.devicePixelRatio);

// // // Control the cmaera and position of the object
// // const control = new OrbitControls(camera, renderer.domElement);

// // container.appendChild(renderer.domElement);

// // // Loading the object - Loader
// // let loader = new GLTFLoader();

// // containerArr.forEach((item, id) => {

// //     switch(id){
// //         case 0:
// //             // Camera
// //             aspect = item.clientWidth / item.clientHeight;
// //             camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// //             camera.position.set(0, 0, 180);
            
// //             // Renderer
// //             renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
// //             renderer.setSize(item.clientWidth, item.clientHeight);
// //             renderer.setPixelRatio(window.devicePixelRatio);

// //             // Control the cmaera and position of the object
// //             control = new OrbitControls(camera, renderer.domElement);

// //             item.appendChild(renderer.domElement);

// //             // Load object
// //             loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

// //                 console.log(gltf.scene);
// //                 house = gltf.scene.children[0];
// //                 scene.add(gltf.scene);
// //                 animate();
// //             })
            

// //         break;
// //         case 1:
// //             // Camera
// //             aspect = item.clientWidth / item.clientHeight;
// //             console.log(item);
// //             camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// //             camera.position.set(0, 0, 180);
            
// //             // Renderer
// //             renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
// //             renderer.setSize(item.clientWidth, item.clientHeight);
// //             renderer.setPixelRatio(window.devicePixelRatio);

// //             // Control the cmaera and position of the object
// //             control = new OrbitControls(camera, renderer.domElement);

// //             item.appendChild(renderer.domElement);

// //             // Load object
// //             loader.load('../three-js/weight-assets/scene.gltf', function(gltf){

// //                 console.log(gltf.scene);
// //                 house = gltf.scene.children[0];
// //                 scene.add(gltf.scene);
// //                 animate();
// //             })
            

// //         break;




// //     }


// // })

// // loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

// //     console.log(gltf.scene);
// //     house = gltf.scene.children[0];
// //     scene.add(gltf.scene);
// //     animate();
// // })

// }

function setupItem1(){

    container = document.querySelector('.gamepad');

    

    // Camera
    aspect = container.clientWidth / container.clientHeight;
    console.log(container);
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 100);

     // Light
    const ambient = new THREE.AmbientLight(0x404040, 3);
    scene1.add(ambient);

    const light = new THREE.AmbientLight(0x404040, 3);
    light.position.set(10, 10, 30);
    scene1.add(light);

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Control the cmaera and position of the object
    control = new OrbitControls(camera, renderer.domElement);

    container.appendChild(renderer.domElement);

    
    // Load object
    loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

        console.log(gltf.scene);
        house = gltf.scene.children[0];
        scene1.add(gltf.scene);
        animate();

    })




}

function setupItem2(){

    container = document.querySelector('.weight');
    
    // scene2.background = new Color("red");

    // Camera
    aspect = container.clientWidth / container.clientHeight;
    console.log(container);
    camera2 = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera2.position.set(0, 0, 100);
    
    // Light
    const ambient = new THREE.AmbientLight(0x404040, 10);
    scene2.add(ambient);

    const light = new THREE.AmbientLight(0x404040, 3);
    light.position.set(10, 10, 30);
    scene2.add(light);

    // Renderer
    renderer2 = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer2.setSize(900, 900);
    renderer2.setPixelRatio(window.devicePixelRatio);
    renderer2.setClearColor(0x111111, 1);


    // Control the cmaera and position of the object
    control = new OrbitControls(camera2, renderer2.domElement);

    container.appendChild(renderer2.domElement);

    // Load object
    loader.load('../three-js/weight-assets/scene.gltf', function(gltf){

        console.log(gltf.scene);
        house = gltf.scene.children[0];
        scene2.add(gltf.scene);
        animate2();

    });




}

function animate(){

    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
   //render scene1
   renderer.render(scene1, camera);
	
//    //don't let renderer eraase canvas
//    renderer.autoClear = false;
   
//    //render scene2
//    renderer2.render(scene2, camera2);
   
//    //let renderer clean next time
//    // (next time is when we render scene1 again)
//    renderer.autoClear = true;

    

}
function animate2(){

    requestAnimationFrame(animate2);
    house.rotation.z += 0.005;

//    //don't let renderer eraase canvas
//    renderer.autoClear = false;
   
    //render scene2
    renderer2.render(scene2, camera2);
   
//    //let renderer clean next time
//    // (next time is when we render scene1 again)
//    renderer.autoClear = true;

    

}

setupItem2();
setupItem1();
// init();
