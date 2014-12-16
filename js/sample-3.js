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

	var material = new THREE.MeshBasicMaterial({
		color: 0x0000ff
	});

	var radius = 5;
	var segments = 32;
	var thetaStart = 0;
	var thetaLength = Math.PI / 2;

	var circleGeometry = new THREE.CircleGeometry(radius, segments, thetaStart, thetaLength);
	var circle = new THREE.Mesh(circleGeometry, material);
	scene.add(circle);
	camera.position.z = 10;
	renderer.render(scene, camera);

	// function animate() {
	// 	circle.rotation.y += 0.01;
	// 	// camera.position.x = 50 * Math.cos(Radius += Math.PI / 180);
	// 	// camera.position.z = 506 * Math.sin(Radius);
	// 	renderer.render(scene, camera);
	// 	requestAnimationFrame(animate);
	// }
	// animate();
})();