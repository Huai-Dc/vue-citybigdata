import * as THREE from 'three'
// 默认相机
export const DEFAULT_CAMERA = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
DEFAULT_CAMERA.name = 'Camera';
DEFAULT_CAMERA.position.set(20, 10, 20);
DEFAULT_CAMERA.lookAt(new THREE.Vector3());

export const sceneHelpers = new THREE.Scene();