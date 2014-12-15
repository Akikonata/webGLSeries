(function() {
	var scene = new THREE.Scene();
	var width = document.body.clientHeight;
	var height = document.body.clientWidth;
	var camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(height, width);
	document.querySelector('.container').appendChild(renderer.domElement);
	window.onresize = function() {
		width = document.body.clientHeight;
		height = document.body.clientWidth;
		renderer.setSize(height, width);
	};
})();