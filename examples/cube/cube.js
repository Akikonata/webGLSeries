(function() {
	var container;
	var camera, scene, raycaster, renderer;

	var mouse = new THREE.Vector2(),
		INTERSECTED;
	var radius = 100,
		theta = 0;
	var cubes = new THREE.Mesh();

	init();
	animate();

	function init() {

		container = document.createElement('div');
		document.body.appendChild(container);

		var info = document.createElement('div');
		info.style.position = 'absolute';
		info.style.top = '10px';
		info.style.width = '100%';
		info.style.textAlign = 'center';
		container.appendChild(info);

		camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z=15;

		scene = new THREE.Scene();

		var light = new THREE.DirectionalLight(0xffffff, 1);
		light.position.set(1, 1, 1).normalize();
		scene.add(light);

		var geometry = new THREE.BoxGeometry(2, 2, 2);
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 3; k++) {
					var cube = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
						color: Math.random() * 0xffffff
					}));
					cube.position.x = i*2;
					cube.position.y = j*2;
					cube.position.z = -k*2;
					//scene.add(cube);
					cubes.add(cube);
				}
			}
		}
		scene.add(cubes);
		cubes.rotation.y=Math.PI/4;
		cubes.rotation.x=Math.PI/4;

		raycaster = new THREE.Raycaster();

		renderer = new THREE.WebGLRenderer();
		renderer.setClearColor(0xf0f0f0);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.sortObjects = false;
		container.appendChild(renderer.domElement);

		document.addEventListener('mousemove', onDocumentMouseMove, false);

		//

		window.addEventListener('resize', onWindowResize, false);

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	function onDocumentMouseMove(event) {

		event.preventDefault();

		mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
		mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	}

	//

	function animate() {

		requestAnimationFrame(animate);
		render();
	}

	function render() {

		// theta += 0.1;

		// camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
		// camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
		// camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
		// camera.lookAt(scene.position);

		// camera.updateMatrixWorld();

		// find intersections

		raycaster.setFromCamera(mouse, camera);

		var intersects = raycaster.intersectObjects(cubes.children);

		if (intersects.length > 0) {

			if (INTERSECTED != intersects[0].object) {

				if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

				INTERSECTED = intersects[0].object;
				INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
				INTERSECTED.material.emissive.setHex(0xff0000);

			}

		} else {

			if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);

			INTERSECTED = null;

		}

		renderer.render(scene, camera);

	}

})();