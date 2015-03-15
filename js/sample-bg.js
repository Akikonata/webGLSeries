(function() {
	var scene, renderder, camera;
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.y = 50;
	camera.position.z = 1500;
	scene.add(camera);
	var groundTexture = THREE.ImageUtils.loadTexture("grasslight-big.jpg");
	groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
	groundTexture.repeat.set(25, 25);
	groundTexture.anisotropy = 16;

	var groundMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		specular: 0x111111,
		map: groundTexture
	});

	var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
	mesh.receiveShadow = true;
	scene.add(mesh);

	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var animate = function() {
		renderer.render(scene, camera);
		window.requestAnimationFrame(animate);
	};
	animate();
})();