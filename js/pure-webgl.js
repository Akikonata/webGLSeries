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
	//利用库创建矩阵
	function initMatrices(canvas) {
		// Create a model view matrix with camera at 0, 0, −3.333
		modelViewMatrix = mat4.create();
		mat4.translate(modelViewMatrix, modelViewMatrix, [0, 0, -3.333]);
		// Create a project matrix with 45 degree field of view
		projectionMatrix = mat4.create();
		mat4.perspective(projectionMatrix, Math.PI / 4,
			canvas.width / canvas.height, 1, 10000);
		console.log(modelViewMatrix, projectionMatrix);
	}
	initMatrices(canvas);

	//用于将着色器字符串转换成真正可用的着色器
	function createShader(gl, str, type) {
			var shader;
			if (type == "fragment") {
				shader = gl.createShader(gl.FRAGMENT_SHADER);
			} else if (type == "vertex") {
				shader = gl.createShader(gl.VERTEX_SHADER);
			} else {
				return null;
			}
			gl.shaderSource(shader, str);
			gl.compileShader(shader);
			if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
				alert(gl.getShaderInfoLog(shader));
				return null;
			}
			return shader;
		}
		//用GLSL语言编写的着色器代码
	var vertexShaderSource =
		"    attribute vec3 vertexPos;\n" +
		"    uniform mat4 modelViewMatrix;\n" +
		"    uniform mat4 projectionMatrix;\n" +
		"    void main(void) {\n" +
		//   Return the transformed and projected vertex value\n" +
		"    gl_Position = projectionMatrix * modelViewMatrix * \n" +
		"    vec4(vertexPos, 1.0);\n" +
		"    }\n";
	var fragmentShaderSource =
		"    void main(void) {\n" +
		"    // Return the pixel color: always output white\n" +
		"    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" +
		"}\n";
		
})();