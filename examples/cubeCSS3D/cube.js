(function() {
	var camera, scene, renderer;
	var controls;
	var faces = [];

	function render() {
		renderer.render(scene, camera);
	};
	var positionMap = [
		//前
		{
			position: {
				x: -200,
				y: -200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: -200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: -200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 0,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 0,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 0,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 200,
				z: 0
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		},
		//后
		{
			position: {
				x: -200,
				y: -200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: -200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: -200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 0,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 0,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 0,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 200,
				z: -600
			},
			rotation: {
				x: 0,
				y: 0,
				z: 0
			}
		},
		//左
		{
			position: {
				x: -300,
				y: -200,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: -200,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: -200,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: 0,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: -0,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: 0,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: 200,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: 200,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -300,
				y: 200,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		},
		//右
		{
			position: {
				x: 300,
				y: -200,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: -200,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: -200,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: 0,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: -0,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: 0,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: 200,
				z: -100
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: 200,
				z: -300
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 300,
				y: 200,
				z: -500
			},
			rotation: {
				x: 0,
				y: Math.PI / 2,
				z: 0
			}
		},
		//下
		{
			position: {
				x: -200,
				y: -300,
				z: -100
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: -300,
				z: -100
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: -300,
				z: -100
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: -300,
				z: -300
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: -300,
				z: -300
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: -300,
				z: -300
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: -300,
				z: -500
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: -300,
				z: -500
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: -300,
				z: -500
			},
			rotation: {
				y: 0,
				x: Math.PI / 2,
				z: 0
			}
		},
		//上
		{
			position: {
				x: -200,
				y: 300,
				z: -100
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 300,
				z: -100
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 300,
				z: -100
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 300,
				z: -300
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 300,
				z: -300
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 300,
				z: -300
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: -200,
				y: 300,
				z: -500
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 0,
				y: 300,
				z: -500
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}, {
			position: {
				x: 200,
				y: 300,
				z: -500
			},
			rotation: {
				y: 0,
				x: -Math.PI / 2,
				z: 0
			}
		}
	];

	function copyPositionInfo(obj, data) {
		obj.position.x = data.position.x;
		obj.position.y = data.position.y;
		obj.position.z = data.position.z;
		obj.rotation.x = data.rotation.x;
		obj.rotation.y = data.rotation.y;
		obj.rotation.z = data.rotation.z;
	};

	function init() {
		camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 3000;
		scene = new THREE.Scene();
		//生成组成立方体表面的小方块
		for (var i = 0; i < 54; i++) {
			var element = document.createElement('div');
			element.className = 'block';
			element.id = "block" + i;
			element.innerHTML = 'block' + i;
			element.onclick = function() {
				alert(this.id + " clicked!");
			};
			var object = new THREE.CSS3DObject(element);
			copyPositionInfo(object, positionMap[i]);
			scene.add(object);
			faces.push(object);
			renderer = new THREE.CSS3DRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.domElement.style.position = 'absolute';
			document.getElementById('container').appendChild(renderer.domElement);
			controls = new THREE.TrackballControls(camera, renderer.domElement);
			controls.rotateSpeed = 0.5;
			controls.minDistance = 500;
			controls.maxDistance = 6000;
			controls.addEventListener('change', render);
		}
		window.addEventListener('resize', onWindowResize, false);
	};

	function animate() {

		requestAnimationFrame(animate);

		TWEEN.update();

		controls.update();
	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

		render();

	}
	init();
	render();
	animate();
})();