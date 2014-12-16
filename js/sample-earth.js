(function() {
	var scene = new THREE.Scene();
	var width = document.body.clientHeight;
	var height = document.body.clientWidth;
	var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(height, width);
	document.body.appendChild(renderer.domElement);
	//初始化球体和材质
	var geometry = new THREE.SphereGeometry(10, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("texture.png");
	var material = new THREE.MeshPhongMaterial({
		color: 0xFFFFFF,
		map: texture
	});
	var earth = new THREE.Mesh(geometry, material);
	scene.add(earth);
	var pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.set(0, 0, 0);
	scene.add(pointLight);
	var light = new THREE.AmbientLight(0xFFFFFF);
	scene.add(light);
	window.onresize = function() {
		width = document.body.clientHeight;
		height = document.body.clientWidth;
		renderer.setSize(height, width);
	};
	renderer.render(scene, camera);
})();