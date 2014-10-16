//ratio (height-width) of map for desktop 
var ratio = 0.45; 

//ratio of map for mobile
var ratioMobile = 1.3; 

// Defaults lat, long and zoom
var defaultlat = 41.325301;
var defaultlon = -71.101885;
var defaultzoom = 5;

//Maximum radius of the largest bubble
var maxsize = 35;

//Color value of the bubble. Please, don't change if it's not necessary. 
var fillColor = 'rgba(191, 97, 81, 0.7)';

// Be sure to include coordinates under the names lat and lon. If you don't want to have bubbles sized according to values, just don't include the column

var data = [
	{"Name":"Chelsea","lat":42.39234,"lon":-71.032684,"Value":35527},
	{"Name":"Chelsea2","lat":42.4,"lon":-71.05,"Value":15527}
];