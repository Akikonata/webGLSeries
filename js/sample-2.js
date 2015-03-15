(function() {
	// AmbientLight（环境光）
	// AreaLight（区域光）
	// DirectionalLight（平行光）
	// HemisphereLight（半球光）
	// PointLight（点光源）
	// SpotLight（聚光灯）
	//初始化场景
	var scene = new THREE.Scene();
	//视锥角度、视野纵横比、近平面，远平面
	var camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(600, 600);
	//renderer.setClearColorHex(0xffffff, 1);
	document.getElementById('stage').appendChild(renderer.domElement);
	//往场景里添加物体
	// var geometry = new THREE.BoxGeometry(10, 10, 10);
	var geometry = new THREE.SphereGeometry(10, 32, 32);
	//加载纹理
	var texture = THREE.ImageUtils.loadTexture("texture.png");
	//var material = new THREE.LineBasicMaterial({
	// 	color: 0xffffff,
	// 	map: texture
	// });
	// var material = new THREE.MeshBasicMaterial({
	// 	color: 0xffffff,
	// 	map: texture
	// });
	var material = new THREE.MeshPhongMaterial({
		color: 0xFFFFFF,
		map: texture
	});
	// var material = new THREE.MeshLambertMaterial({
	// 	color: 0xFFFFFF,
	// 	map: texture
	// });
	// var material = new THREE.LineBasicMaterial({
	// 	color: 0xffff00,
	// 	map: texture
	// });
	var pointLight = new THREE.PointLight(0xFFFFFF); // Set the color of the light source (white).
	pointLight.position.set(0, 0, 0); // Position the light source at (x, y, z).
	scene.add(pointLight); // Add the light sou6rce to the scene.

	// var spotLight = new THREE.SpotLight(0xffffff);
	// spotLight.position.set(0, 100, 100);

	// spotLight.castShadow = true;

	// spotLight.shadowMapWidth = 1024;
	// spotLight.shadowMapHeight = 1024;

	// spotLight.shadowCameraNear = 500;
	// spotLight.shadowCameraFar = 4000;
	// spotLight.shadowCameraFov = 30;

	//scene.add(spotLight);
	//漫反射
	var light = new THREE.AmbientLight(0xFFFFFF);
	scene.add(light);

	// var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	// directionalLight.position.set(20, 0, 0);
	// scene.add(directionalLight);

	var sphere = new THREE.Mesh(geometry, material);
	//sphere.castShadow = true;
	//sphere.receiveShadow = true;
	sphere.position.z = -20;
	scene.add(sphere);

	camera.position.y = 0;
	camera.position.z = 0;
	var Radius = 0;

	function animate() {
		sphere.rotation.y += 0.01;
		// camera.position.x = 50 * Math.cos(Radius += Math.PI / 180);
		// camera.position.z = 506 * Math.sin(Radius);
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}
	animate();
})();