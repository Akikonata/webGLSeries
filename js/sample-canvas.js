(function() {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(600, 600);
	document.getElementById('stage').appendChild(renderer.domElement);
	var cvs = document.getElementById('texture');
	var ctx = cvs.getContext('2d');
	var texture = new THREE.Texture(cvs);
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({
		color: 0xFFFFFF,
		map: texture
	});
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	camera.position.z = 2;
	var animate = function() {
		cube.rotation.x += 0.01;
		texture.needsUpdate = true;
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	};
	animate();
	var image = new Image();
	image.src = 'heart.jpg';
	image.onload = function() {
		ctx.drawImage(image, 0, 0);
	};
	var links = document.getElementById('links');
	links.addEventListener('click', function(e) {
		var link = e.target.getAttribute('data-link');
		image.src = link;
	}, false);
})();