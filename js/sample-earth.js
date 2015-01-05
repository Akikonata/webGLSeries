(function() {
	//初始化场景
	var scene = new THREE.Scene();
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0x000000, 1);
	document.body.appendChild(renderer.domElement);
	renderer.domElement.id = 'earth-canvas';
	//往场景里添加物体
	var geometry = new THREE.SphereGeometry(10, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("earth.jpg", function(tex) {
		console.log(tex);
	});
	var material = new THREE.MeshLambertMaterial({
		color: 0xFFFFFF,
		map: texture
	});
	var pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.set(0, 0, 0);
	scene.add(pointLight);
	//漫反射
	var light = new THREE.AmbientLight(0xFFFFFF);
	scene.add(light);

	var earth = new THREE.Mesh(geometry, material);
	earth.position.z = -25;
	scene.add(earth);

	camera.position.y = 0;
	camera.position.z = 0;
	var Radius = 0;
	var state = 'rotating';

	function animate() {
		earth.rotation.y += 0.01;
		renderer.render(scene, camera);
		if (state === 'rotating') requestAnimationFrame(animate);
	}
	animate();
	window.onresize = function() {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
		renderer.setSize(width, height);
		renderer.render(scene, camera);
	};
	var earthCanvas = document.getElementById('earth-canvas');
	console.log(earthCanvas);
	window.addEventListener('touchstart', function() {
		if (state === 'rotating') state = 'stop';
		else {
			state = 'rotating';
			animate();
		}
	});
})();