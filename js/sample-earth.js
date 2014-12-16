(function() {
	//初始化场景
	var scene = new THREE.Scene();
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);
	//往场景里添加物体
	var geometry = new THREE.SphereGeometry(10, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("texture.png");
	var material = new THREE.MeshPhongMaterial({
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

	function animate() {
		earth.rotation.y += 0.01;
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
	animate();
	window.onresize = function() {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
		renderer.setSize(width, height);
	};
})();