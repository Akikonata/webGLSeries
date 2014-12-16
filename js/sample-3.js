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
	var geometry = new THREE.CylinderGeometry(10, 10, 0.5, 32);
	var material = new THREE.MeshBasicMaterial({
		color: 0xffffff
	});
	var cylinder = new THREE.Mesh(geometry, material);
	scene.add(cylinder);
	//创建秒针

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