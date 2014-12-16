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
	//创建指针
	var dir = new THREE.Vector3(1, 0, 0);
	var origin = new THREE.Vector3(0, 0, 0);
	var length = 10;
	var hex = 0xffffff;

	var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
	arrowHelper.rotation.x = 1;
	scene.add(arrowHelper);
	//创建表盘

	//设置相机的位置
	camera.position.y = 0;
	camera.position.z = 10;

	function animate() {
		arrowHelper.rotation.y += Math.PI / 30;
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