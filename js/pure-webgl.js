(function() {
	var canvas = document.getElementById("canvas");
	//获取绘图上下文
	var initWebGL = function() {
		var gl = canvas.getContext("experimental-webgl");
		return gl;
	};
	//初始化视口
	var initViewport = function(gl, canvas) {
		gl.viewport(0, 0, canvas.width, canvas.height);
	};
	var gl = initWebGL();
	initViewport(gl, canvas);
	//创建正方形
	function createSquare(gl) {
		var vertexBuffer;
		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		var verts = [
			.5, .5, 0.0, -.5, .5, 0.0,
			.5, -.5, 0.0, -.5, -.5, 0.0
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
		var square = {
			buffer: vertexBuffer,
			vertSize: 3,
			nVerts: 4,
			primtype: gl.TRIANGLE_STRIP
		};
		return square;
	}
	var square = createSquare(gl);

	var projectionMatrix, modelViewMatrix;

	function initMatrices(canvas) {
		// Create a model view matrix with camera at 0, 0, −3.333
		modelViewMatrix = mat4.create();
		mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -3.333]);
		// Create a project matrix with 45 degree field of view
		projectionMatrix = mat4.create();
		mat4.perspective(projectionMatrix, Math.PI / 4,
			canvas.width / canvas.height, 1, 10000);
	}
	initMatrices(canvas);


})();