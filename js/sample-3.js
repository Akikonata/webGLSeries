(function() {
	//初始化场景
	var scene = new THREE.Scene();
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	//加入漫反射和聚光灯
	// var amLight = new THREE.AmbientLight(0x563abb);
	// scene.add(amLight);
	var light = new THREE.SpotLight(0xffffff, 1);
	light.position.set(100, 200, 50);
	light.castShadow = true;
	light.shadowCameraNear = 50;
	light.shadowCameraFar = 300;
	light.shadowCameraFov = 30;
	scene.add(light);
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0xffffff, 1);
	//开启投影
	renderer.shadowMapEnabled = true;
	document.body.appendChild(renderer.domElement);
	//创建表盘
	var cylinderGeometry = new THREE.CylinderGeometry(10, 10, 0.5, 32);
	var cylindermMaterial = new THREE.MeshPhongMaterial({
		color: 0xffffff
	});
	var cylinder = new THREE.Mesh(cylinderGeometry, cylindermMaterial);
	scene.add(cylinder);
	cylinder.castShadow = true;
	cylinder.receiveShadow = true;
	var torusGeometry = new THREE.TorusGeometry(11.5, 1.5, 16, 100);
	var torusMaterial = new THREE.MeshLambertMaterial({
		color: 0x8f82bc
	});
	var torus = new THREE.Mesh(torusGeometry, torusMaterial);
	torus.rotation.x = -Math.PI / 2;
	scene.add(torus);
	//创建秒针
	var secondHandGeometry = new THREE.BoxGeometry(9.5, 0.5, 0.5);
	var secondHandMaterial = new THREE.MeshPhongMaterial({
		color: 0x000000
	});
	var secondHand = new THREE.Mesh(secondHandGeometry, secondHandMaterial);
	secondHand.castShadow = true;
	secondHand.receiveShadow = true;
	secondHand.position.y = 0.8;
	scene.add(secondHand);
	//创建刻度
	var carveGeometry = new THREE.BoxGeometry(1, 1, 1);
	var carveMaterial = new THREE.MeshPhongMaterial({
		color: 0x000000
	});
	for (var i = 0; i < 12; i++) {
		var carve = new THREE.Mesh(carveGeometry, carveMaterial);
		carve.rotation.y = Math.PI * i / 6;
		carve.position.x = 9 * Math.cos(carve.rotation.y);
		carve.position.z = -9 * Math.sin(carve.rotation.y);
		scene.add(carve);
	}
	// var textGeometry = new THREE.TextGeometry('1', {
	// 	size: 20,
	// 	height: 10,
	// 	curveSegments: 32,
	// 	font: 'Helvetica',
	// 	weight: 'normal',
	// 	style: 'normal',
	// 	bevelEnabled: true,
	// 	bevelThickness: 10,
	// 	bevelSize: 8

	// });
	// var textMaterial = new THREE.MeshPhongMaterial({
	// 	color: 0x000000
	// });
	// var text = new THREE.Mesh(textGeometry, textMaterial);
	// scene.add(text);
	//创建中心的圆柱
	var centerGeometry = new THREE.CylinderGeometry(1, 1, 2.5, 32);
	var centerMaterial = new THREE.MeshPhongMaterial({
		color: 0x000000
	});
	var center = new THREE.Mesh(centerGeometry, centerMaterial);
	scene.add(center);
	center.castShadow = true;
	center.receiveShadow = true;
	//设置相机的位置
	camera.position.y = 20;
	camera.position.z = 20;
	camera.rotation.x = -Math.PI / 6;
	//camera.position.x = 10;

	function animate() {
		secondHand.rotation.y -= Math.PI / 30;
		secondHand.position.x = 4.5 * Math.cos(secondHand.rotation.y);
		secondHand.position.z = -4.5 * Math.sin(secondHand.rotation.y);
		renderer.render(scene, camera);
		setTimeout(animate, 1000);
	}
	animate();
	window.onresize = function() {
		width = document.body.clientWidth;
		height = document.body.clientHeight;
		renderer.setSize(width, height);
	};
})();