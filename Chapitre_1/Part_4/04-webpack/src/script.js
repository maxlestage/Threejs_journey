import "./style.css";
import * as THREE from "three";

// Scène :
const scene = new THREE.Scene();

// Objet la forme Géometrie et l'apparence :
const geometrie = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "green" });
const mesh = new THREE.Mesh(geometrie, material);
scene.add(mesh);

// Sizing block :
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
