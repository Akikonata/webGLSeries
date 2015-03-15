(function() {
	var scene, renderder, camera;
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
	camera.position.y = 0;
	camera.position.z = 10;
	scene.add(camera);
	var groundTexture = THREE.ImageUtils.loadTexture("grasslight-big.jpg");
	// groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
	// groundTexture.repeat.set(25, 25);
	// groundTexture.anisotropy = 16;

	var groundMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		map: groundTexture
	});

	var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(24, 24 * window.innerHeight / window.innerWidth), groundMaterial);
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