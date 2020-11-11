
var block = document.querySelector(".cube");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, block.offsetWidth /block.offsetHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize(block.offsetWidth , block.offsetHeight );
block.appendChild( renderer.domElement );
var childOfBlock = document.querySelector(".cube canvas");
camera.position.z = 7;
//Create a cube
var cube = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshPhongMaterial({
        color:0xffffff,
        transparent:true,
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
        map:new THREE.TextureLoader( ).load("../images/jsside.png"),
    }),
    
)
scene.add( cube );

//Lights
var AmbientLight = new THREE.AmbientLight( 0x555500,1,0.8 ); // soft white light (мягкий белый свет)
scene.add( AmbientLight );

var light = new THREE.PointLight(0x08FDD8,2,18);
light.position.set(-6,-3,6);
light.castShadow = true;
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 25;
scene.add(light);

var light1 = new THREE.PointLight(0xFF0054,2,18);
light1.position.set(-6,5,6);
light1.castShadow = true;
light1.shadow.camera.near = 0.1;
light1.shadow.camera.far = 25;
scene.add(light1);
//Controls
var controls = new THREE.OrbitControls(camera , renderer.domElement);
controls.update();


//Render
function render() {
    requestAnimationFrame( render ); //З амена SetInterval
     cube.rotation.x += 0.005;
     cube.rotation.y += 0.005;
    controls.update();
    renderer.render( scene, camera );
}


window.addEventListener("resize",()=>{
    let height = block.offsetHeight;
    let width = block.offsetWidth;
    renderer.setSize(width,height);
    childOfBlock.style.width = "100%";
    childOfBlock.style.height = "100%";
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
})

render();

