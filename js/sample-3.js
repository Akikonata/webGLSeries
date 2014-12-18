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
	var secondHandGeometry = new THREE.BoxGeometry(9, 1.5, 1);
	var secondHandMaterial = new THREE.MeshBasicMaterial({
		color: 0x000000
	});
	var secondHand = new THREE.Mesh(secondHandGeometry, secondHandMaterial);
	scene.add(secondHand);
	//设置相机的位置
	camera.position.y = 5;
	camera.position.z = 20;

	function animate() {
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