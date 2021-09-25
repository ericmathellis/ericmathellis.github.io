/* Spherical.js */
/* https://github.com/chrisbateman/spherical */

var baseUrl = '';

var pano = new Spherical({
	container: 'body',
	front: baseUrl + '1.jpeg',
	back: baseUrl + '2.jpeg',
	left: baseUrl + '3.jpg',
	right: baseUrl + '4.jpg',
	top: baseUrl + '5.jpg',
	bottom: baseUrl + '6.jpeg'
});
