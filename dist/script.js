/* Spherical.js */
/* https://github.com/chrisbateman/spherical */

var baseUrl = '';

var pano = new Spherical({
	container: 'body',
	front: baseUrl + '1.png',
	back: baseUrl + '2.png',
	left: baseUrl + '3.png',
	right: baseUrl + '4.png',
	top: baseUrl + '5.png',
	bottom: baseUrl + '6.png'
});
