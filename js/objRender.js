import * as THREE from 'https://cdn.skypack.dev/three@0.132.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';
import { Color } from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";
import { MeshBasicMaterial } from "https://cdn.skypack.dev/three@0.132.2/build/three.module.js";

console.log(GLTFLoader);
console.log(OrbitControls);

let camera;
let camera2;
let camera3;
let aspect;
let aspect2;
let renderer;
let renderer2;
let renderer3;
let house;
let control;
let container;

// Models
let model1;
let model2;
let model3;

// Scenes
// let scene;
let scene1 = new THREE.Scene();
let scene2 = new THREE.Scene();
let scene3 = new THREE.Scene();

// Camera
const fov = 75;
const near = 0.1;
const far = 500;


function loadModel(url) {
    return new Promise(resolve => {
      new GLTFLoader().load(url, resolve);
    });
  }


let p1 = loadModel('./three-js/gamepad-assets/scene.gltf').then(result => {  model1 = result.scene.children[0]; });
let p2 = loadModel('./three-js/weight-assets/scene.gltf').then(result => {  model2 = result.scene.children[0]; });
let p3 = loadModel('./three-js/book-assets/scene.gltf').then(result => {  model3 = result.scene.children[0]; });

Promise.all([p1, p2, p3]).then(() => {

    const container = document.querySelector('.gamepad');
    const weight = document.querySelector('.weight');
    const book = document.querySelector('.book');

    // Position models in the center of the canvas
    const box = new THREE.Box3().setFromObject( model1, model2, model3 );
    const center = new THREE.Vector3();
    box.getCenter( center );
    model1.position.sub( center );
    model2.position.sub( center );
    model3.position.sub( center );
   
    
    //add model to the scene
    scene1.add(model1);
    scene2.add(model2);
    scene3.add(model3);
   
    // Camera
    aspect = container.clientWidth / container.clientHeight;
    console.log(container);
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 50);
    camera2 = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera2.position.set(0, 0, 250);
    camera3 = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera3.position.set(0, 0, 35);

     // Light
    const ambient = new THREE.AmbientLight(0x404040, 5);
    scene1.add(ambient);
    scene2.add(ambient);
    scene3.add(ambient)

    const light = new THREE.AmbientLight(0x404040, 3);
    light.position.set(10, 10, 100);
    const light2 = new THREE.DirectionalLight( 0xffffff, 5 );
   
    scene1.add(light);
    scene2.add(light2);
    

    // Renderers
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer2 = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer2.setSize(weight.clientWidth, weight.clientHeight);
    renderer2.setPixelRatio(window.devicePixelRatio);

    renderer3 = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer3.setSize(book.clientWidth, book.clientHeight);
    renderer3.setPixelRatio(window.devicePixelRatio);
    

    // // Control the cmaera and position of the object
    // control = new OrbitControls(camera, renderer.domElement);
    // control = new OrbitControls(camera2, renderer2.domElement);

    container.appendChild(renderer.domElement);
    weight.appendChild(renderer2.domElement);
    book.appendChild(renderer3.domElement);

    animate();
    

})


// function setupItem1(){

//     const container = document.querySelector('.gamepad');

    

//     // Camera
//     aspect = container.clientWidth / container.clientHeight;
//     console.log(container);
//     camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     camera.position.set(0, 0, 100);

//      // Light
//     const ambient = new THREE.AmbientLight(0x404040, 3);
//     scene1.add(ambient);

//     const light = new THREE.AmbientLight(0x404040, 3);
//     light.position.set(10, 10, 30);
//     scene1.add(light);

//     // Renderer
//     renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
//     renderer.setSize(container.clientWidth, container.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
    

//     // Control the cmaera and position of the object
//     control = new OrbitControls(camera, renderer.domElement);

//     container.appendChild(renderer.domElement);

//     // Make your 3D object responsive based on window resizing
//     window.addEventListener('resize', () => {

//         renderer.setSize(container.clientWidth, container.clientHeight);
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();

//     })
    
//     // Load object
//     loader.load('../three-js/gamepad-assets/scene.gltf', function(gltf){

//         console.log(gltf.scene);
//         house = gltf.scene.children[0];
//         scene1.add(gltf.scene);
//         animate();

//     })




// }

// function setupItem2(){

//     const container = document.querySelector('.weight');
    
//     // scene2.background = new Color("red");

//     // Camera
//     aspect = container.clientWidth / container.clientHeight;
//     console.log(container);
//     camera2 = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     camera2.position.set(0, 0, 100);
    
//     // Light
//     const ambient = new THREE.AmbientLight(0x404040, 10);
//     scene2.add(ambient);

//     const light = new THREE.AmbientLight(0x404040, 3);
//     light.position.set(10, 10, 30);
//     scene2.add(light);

//     // Renderer
//     renderer2 = new THREE.WebGLRenderer({antialias: true, alpha: true});
//     renderer2.setSize(900, 900);
//     renderer2.setPixelRatio(window.devicePixelRatio);
   


//     // Control the cmaera and position of the object
//     control = new OrbitControls(camera2, renderer2.domElement);

//     container.appendChild(renderer2.domElement);

//     // Load object
//     loader.load('../three-js/weight-assets/scene.gltf', function(gltf){

//         console.log(gltf.scene);
//         house = gltf.scene.children[0];
//         scene2.add(gltf.scene);
//         animate2();

//     });




// }

function animate(){

    
    model1.rotation.z += 0.005;
    model2.rotation.z += 0.005;
    model3.rotation.y += 0.005;
   //render scene1
    renderer.render(scene1, camera);
    renderer2.render(scene2, camera2);
    renderer3.render(scene3, camera3);
    window.requestAnimationFrame(animate)
    
}
