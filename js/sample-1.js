(function() {
	//初始化场景
	var scene = new THREE.Scene();
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(90, 1, 0.001, 100);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(600, 600);
	document.getElementById('stage').appendChild(renderer.domElement);
	//往场景里添加物体
	// var geometry = new THREE.BoxGeometry(10, 10, 10);
	var geometry = new THREE.SphereGeometry(5, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("heart.jpg");
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00,
		map: texture
	});
	// var material = new THREE.MeshPhongMaterial({
	// 	map: texture,
	// 	ambient: 0x030303,
	// 	color: 0xdddddd,
	// 	specular: 0x009900,
	// 	shininess: 30,
	// 	shading: THREE.FlatShading
	// });
	for (var i = 0; i < 100; i++) {
		var sphere = new THREE.Mesh(geometry, material);
		sphere.position.z = -i * 10;
		scene.add(sphere);
	}
	camera.position.y = 10;
	camera.position.z = 3;
	var Radius = 0;

	function animate() {
		// camera.position.x = 50 * Math.cos(Radius += Math.PI / 180);
		// camera.position.z = 506 * Math.sin(Radius);
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
	animate();
})();