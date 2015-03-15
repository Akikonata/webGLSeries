(function() {
	var SCREEN_WIDTH = window.innerWidth,
		SCREEN_HEIGHT = window.innerHeight;
	//初始化场景
	var scene = new THREE.Scene();
	//视锥角度、视野纵横比、近平面，远平面
	var camera1 = new THREE.PerspectiveCamera(90, 1, 0.01, 100);
	var camera2 = new THREE.PerspectiveCamera(90, 1, 0.01, 100);

	var renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setClearColor(0x000000, 1);
	renderer.autoClear = false;
	renderer.setPixelRatio(window.devicePixelRatio);
	document.body.appendChild(renderer.domElement);
	var _w = document.body.clientWidth;
	var _h = document.body.clientHeight;
	//初始化形状
	var geometry = new THREE.SphereGeometry(10, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("heart.jpg");
	var texture2 = THREE.ImageUtils.loadTexture("earth.jpg");
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		map: texture
	});
	var geometry2 = new THREE.BoxGeometry(10, 10, 10);
	var material2 = new THREE.MeshBasicMaterial({
		color: 0xffffff,
		map: texture2
	});
	var cube = new THREE.Mesh(geometry2, material2);
	scene.add(cube);
	var sphere = new THREE.Mesh(geometry, material);
	scene.add(sphere);
	camera1.position.z = 25;
	camera2.position.z = 25;
	camera1.position.x = -2;
	camera2.position.x = 2;
	var setRendererSize = function() {
		SCREEN_WIDTH = window.innerWidth;
		SCREEN_HEIGHT = window.innerHeight;
		renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	};
	window.onresize = setRendererSize;
	setRendererSize();
	var angle = 0;
	function render() {
		sphere.rotation.y += 0.01;
		cube.rotation.y = angle;
		cube.position.z = 15 * Math.sin(angle += 0.01);
		cube.position.x = 15 * Math.cos(angle += 0.01);
		renderer.clear();
		renderer.setViewport(0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
		renderer.render(scene, camera1);

		renderer.setViewport(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
		renderer.render(scene, camera2);
		requestAnimationFrame(render);
	}
	render();
})();