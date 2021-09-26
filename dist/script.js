/* Spherical.js */
/* https://github.com/chrisbateman/spherical */

var baseUrl = '';

var pano = new Spherical({
	container: 'body',
	front: baseUrl + 'front.tif',
	back: baseUrl + 'back.tif',
	left: baseUrl + 'left.tif',
	right: baseUrl + 'right.tif',
	top: baseUrl + 'top.tif',
	bottom: baseUrl + 'bottom.tif'
});
