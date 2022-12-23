import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

console.log(GLTFLoader);
// Place where we want to render the scane
const place = document.querySelector('.hobby-images');

// Scene
const scene = new THREE.Scene();

// Building the loader of the 3D obj
const loader = new GLTFLoader();

// loader.load('../three-js/gamepad-assets/old_console_gamepad/scene.gltf', (loader) => {
//     console.log(loader);
//     const root = loader.scene;
//     scene.add(root);

// })

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({

    color: 0x00ff00
})
const boxMesh = new THREE.Mesh(geometry,material);
scene.add(boxMesh);

// //Adding the light 
// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 5);
// scene.add(light);

// Some settings
const sizes = {

    width: window.innerWidth,
    height: window.innerHeight


}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0,1,2);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGL1Renderer({place: place});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabledd = true;
renderer.gammaOutput = true;


function animate(){

    requestAnimationFrame(animate);
    renderer.render(scene, camera);


}

animate();