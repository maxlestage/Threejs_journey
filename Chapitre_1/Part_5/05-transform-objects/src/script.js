import "./style.css";
import * as THREE from "three";

/**
 *Canvas
 */
const canvas = document.querySelector("canvas.webgl");

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

/**
 * mesh.position.x = 0.7;
 * mesh.position.y = -0.6;
 * mesh.position.z = 1;
 */
mesh.position.set(0.7, -0.6, 1);

/**
 * mesh.scale.x = 2;
 * mesh.scale.y = 0.25;
 * mesh.scale.z = 0.5;
 */
mesh.scale.set(2, 0.25, 0.5);

/**
 * Position caméra Euler à éviter :
 * mesh.rotation.x = Math.PI * 0.25;
 * mesh.rotation.y = Math.PI * 0.25;
 */
scene.add(mesh);

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.lookAt(new THREE.Vector3(0, -1, 0));
camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
