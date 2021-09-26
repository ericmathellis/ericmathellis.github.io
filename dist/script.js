/* Spherical.js */
/* https://github.com/chrisbateman/spherical */

var baseUrl = '';

var pano = new Spherical({
	container: 'body',
	front: baseUrl + 'front.png',
	back: baseUrl + 'back.png',
	left: baseUrl + 'left.png',
	right: baseUrl + 'right.png',
	top: baseUrl + 'top.png',
	bottom: baseUrl + 'bottom.png'
});
