console.log("Hello Three.js");
console.log(THREE);

// Canvas
// Depuis index.html
const canvas = document.querySelector("canvas.webgl");
console.log({ canvas: canvas });
// La scène :
const scene = new THREE.Scene();

// L'objet (notre Cube) :
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
// Mesh construit notre objet avec les paramètres qui lui ont été donné, il faut importer la forme et son aspect*
const mesh = new THREE.Mesh(geometry, material);
// Pour que la forme soit visible on doit la passer dans la scène :
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
/* The left is the stringified name, the right is a JS reference.
[21:54]
Would be equivalent to

const renderer = new THREE.WebGLRenderer({
    'canvas': canvas
})
[21:54]
There's also shorthand for this where the key will be set to the name of the reference:

const renderer = new THREE.WebGLRenderer({
    canvas
}) */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
