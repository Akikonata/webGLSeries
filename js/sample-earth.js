(function() {
	if (!window.WebGLActiveInfo) {
		alert("您的浏览器不支持webGL");
		return;
	}
	//初始化场景
	var scene = new THREE.Scene();
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var R = 100;
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(120, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0x000000, 1);
	document.body.appendChild(renderer.domElement);
	renderer.domElement.id = 'earth-canvas';
	//往场景里添加物体
	var geometry = new THREE.SphereGeometry(R, 32, 32);
	var texture = THREE.ImageUtils.loadTexture("earth.jpg");
	var material = new THREE.MeshLambertMaterial({
		color: 0xFFFFFF,
		map: texture
	});
	var pointLight = new THREE.PointLight(0xFFFFFF);
	pointLight.position.set(200, 0, 200);
	scene.add(pointLight);
	var light = new THREE.AmbientLight(0xFFFFFF);
	scene.add(light);

	var earth = new THREE.Mesh(geometry, material);
	scene.add(earth);

	camera.position.y = 0;
	camera.position.z = 200;
	var Radius = 0;
	var state = 'rotating';
	var select = '';

	function animate() {
		earth.rotation.y += 0.01;
		renderer.render(scene, camera);
		switch (select) {
			case "hot":
				break;
			default:
				break;
		}
		if (state === 'rotating') requestAnimationFrame(animate);
	}
	window.onresize = function() {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
		renderer.setSize(width, height);
		renderer.render(scene, camera);
	};
	var panel = document.getElementById("panel");
	panel.addEventListener('touchstart', function() {
		if (state === 'rotating') state = 'stop';
		else {
			state = 'rotating';
			animate();
		}
	});
	var threads = [{
		name: '泰国',
		longitude: 97.5,
		latitude: 13.5
	}];
	var controllerBar = document.getElementById("controller-bar");
	var hotPositions = [];
	var sin = Math.sin;
	var cos = Math.cos;
	var pi = Math.PI;
	var degToArc = function(deg) {
		return pi * deg / 180;
	};
	threads.forEach(function(o) {
		hotPositions.push({
			name: o.name,
			x: R * cos(degToArc(o.latitude)) * sin(degToArc(o.longitude)),
			y: R * sin(degToArc(o.latitude)),
			z: R * cos(degToArc(o.latitude)) * sin(degToArc(o.longitude))
		});
	});
	var hotBalls = [];
	hotPositions.forEach(function(o) {
		var ballGeometry = new THREE.SphereGeometry(10, 32, 32);
		var ballMeterial = new THREE.MeshLambertMaterial({
			color: 0x000000
		});
		var ball = new THREE.Mesh(ballGeometry, ballMeterial);
		ball.position.x = o.x;
		ball.position.y = o.y;
		ball.position.z = o.z;
		hotBalls.push(ball);
	});
	//scene.add(hotBalls[0]);
	animate();
	controllerBar.addEventListener('touchstart', function(e) {
		var cmd = e.target.getAttribute('data-cmd');
		select = cmd;
		switch (cmd) {
			case 'hot':
				scene.add(hotBalls[0]);
				//scene.remove(earth);
				//hotBalls[0].position.z = 200;
				break;
			default:
				break;
		}
	});
})();