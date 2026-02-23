import * as THREE from 'three'


export function createCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let cameraRadius = 4;
    let cameraAzimuth = 0;
    let cameraElevation = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let isMouseDown = false;

    updateCameraPostion();

    function onMouseDown() {
        isMouseDown = true;
    }

    function onMouseUp() {
        isMouseDown = false;
    }

    function onMouseMove(event) {
        if (isMouseDown) {
            cameraAzimuth += -((event.clientX - prevMouseX) * 0.5);
            cameraElevation += ((event.clientY - prevMouseY) * 0.5);
            cameraElevation = Math.min(90, Math.max(0, cameraElevation));
            updateCameraPostion();
        }

        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
    }

    function updateCameraPostion() {
        camera.position.x = cameraRadius * Math.sin(cameraAzimuth * Math.PI / 180) * Math.cos(cameraElevation * Math.PI / 180)
        camera.position.y = cameraRadius * Math.sin(cameraElevation * Math.PI / 180);
        camera.position.z = cameraRadius * Math.cos(cameraAzimuth * Math.PI / 180) * Math.cos(cameraElevation * Math.PI / 180);

        camera.lookAt(0, 0, 0);
        camera.updateMatrix();
    }
    return {
        camera,
        onMouseDown,
        onMouseUp,
        onMouseMove
    }
}