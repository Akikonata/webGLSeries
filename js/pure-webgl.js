(function() {
	var initWebGL = function() {
		var gl = canvas.getContext("experimental-webgl");
		return gl;
	};
	var gl = initWebGL();
	console.log(gl);
})();