  var camera, scene, renderer;
  var geometry, material, cube;
  var mouseX = 0, mouseY = 0;

  var Animation = function() {
    init();
    render();
  };

  var init = function() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );

    renderer = new THREE.WebGLRenderer({ logarithmicDepthBuffer: true, alpha: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    geometry = new THREE.BoxGeometry( 1, 1, 1 );


    var magenta = new THREE.Color('rgb(255,0,255)')
    material = new THREE.MeshBasicMaterial( { color: magenta });

    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    cube.position.z = 0;

    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

  };

  var onDocumentMouseMove = function(event) {

    mouseX = ( event.clientX - window.innerWidth / 2 ) / 100;
    mouseY = ( event.clientY - window.innerHeight / 2 ) / 100;

  };

  var render = function() {
    requestAnimationFrame( render );

    camera.position.x += ( mouseX - camera.position.x ) * 0.05;
    camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };


  // browserify support
  if ( typeof module === 'object' ) {

  	module.exports = Animation;

  }
