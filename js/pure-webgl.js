(function() {
	var initWebGL = function() {
		var gl = canvas.getContext("experimental-webgl");
		return gl;
	};
	var initViewport = function(gl, canvas) {
		gl.viewport(0, 0, canvas.width, canvas.height);
	};
	var gl = initWebGL();
	initViewport(gl, canvas);
})();