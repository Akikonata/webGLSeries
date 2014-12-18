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
	//创建表盘
	var cylinderGeometry = new THREE.CylinderGeometry(10, 10, 0.5, 32);
	var cylindermMaterial = new THREE.MeshBasicMaterial({
		color: 0xffffff
	});
	var cylinder = new THREE.Mesh(cylinderGeometry, cylindermMaterial);
	scene.add(cylinder);
	var ringGeometry = new THREE.RingGeometry(10, 11, 32);
	var ringMaterial = new THREE.MeshBasicMaterial({
		color: 0xffff00,
		side: THREE.DoubleSide
	});
	var ring = new THREE.Mesh(ringGeometry, ringMaterial);
	ring.rotation.x = -Math.PI / 2;
	scene.add(ring);
	//创建秒针
	var secondHandGeometry = new THREE.BoxGeometry(9.5, 1.5, 0.5);
	var secondHandMaterial = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	var secondHand = new THREE.Mesh(secondHandGeometry, secondHandMaterial);
	scene.add(secondHand);
	//创建刻度
	var carveGeometry = new THREE.BoxGeometry(1, 1, 1);
	var carveMaterial = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	for (var i = 0; i < 12; i++) {
		var carve = new THREE.Mesh(carveGeometry, carveMaterial);
		carve.rotation.y = Math.PI * i / 6;
		carve.position.x = 9 * Math.cos(carve.rotation.y);
		carve.position.z = -9 * Math.sin(carve.rotation.y);
		scene.add(carve);
	}
	//创建中心的圆柱
	//设置相机的位置
	camera.position.y = 12;
	camera.position.z = 25;

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