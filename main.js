import * as THREE from 'three';
import { compute } from 'three/src/nodes/gpgpu/ComputeNode';
import { createCamera } from './camera';


let cameraRadius = 4;
let cameraAzimuth = 0;
let cameraElevation = 0;
let prevMouseX = 0;
let prevMouseY = 0;
let isMouseDown = false;

const camera = createCamera();
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


function animate(time) {
    renderer.render(scene, camera.camera);
}

function onMouseDown() {
    camera.onMouseDown();
}

function onMouseMove(event) {
    camera.onMouseMove(event);
}

function onMouseUp() {
    camera.onMouseUp();
}


document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);
document.addEventListener('mousemove', onMouseMove, false);