// Prefix and suffix (if any) associated to the value to include in the label when hovering over the states

var prefix = "$";
var suffix = "m";

// Steps to divide the color ranges of the map. Use 6 for choropleth

var steps = 6;

// Decimals you want to use
var decimals = 0;

// If you want to create specified steps, write here the steps. Leave them like they are if you want automatic steps.
// YOU SHOULD INTRODUCE THE STEPS USING A DASH, LIKE  VAR STEP1 = 0-20, VAR STEP2=20.1-50 ... AND SO ON
var step1 = "0";
var step2 = "0";
var step3 = "0";
var step4 = "0";
var step5 = "0";

// Data for maps, includes name of the State to display, Zip for correlation with map and value to show

var data = [
{"Name":"Alabama","Zip":"AL","Value":0},
{"Name":"Alaska","Zip":"AK","Value":1},
{"Name":"Arizona","Zip":"AZ","Value":2},
{"Name":"Arkansas","Zip":"AR","Value":3},
{"Name":"California","Zip":"CA","Value":4},
{"Name":"Colorado","Zip":"CO","Value":5},
{"Name":"Connecticut","Zip":"CT","Value":6},
{"Name":"Delaware","Zip":"DE","Value":7},
{"Name":"Florida","Zip":"FL","Value":8},
{"Name":"Georgia","Zip":"GA","Value":9},
{"Name":"Hawaii","Zip":"HI","Value":10},
{"Name":"Idaho","Zip":"ID","Value":11},
{"Name":"Illinois","Zip":"IL","Value":12},
{"Name":"Indiana","Zip":"IN","Value":13},
{"Name":"Iowa","Zip":"IA","Value":14},
{"Name":"Kansas","Zip":"KS","Value":15},
{"Name":"Kentucky","Zip":"KY","Value":16},
{"Name":"Louisiana","Zip":"LA","Value":17},
{"Name":"Maine","Zip":"ME","Value":18},
{"Name":"Maryland","Zip":"MD","Value":19},
{"Name":"Massachusetts","Zip":"MA","Value":20},
{"Name":"Michigan","Zip":"MI","Value":21},
{"Name":"Minnesota","Zip":"MN","Value":22},
{"Name":"Mississippi","Zip":"MS","Value":23},
{"Name":"Missouri","Zip":"MO","Value":24},
{"Name":"Montana","Zip":"MT","Value":25},
{"Name":"Nebraska","Zip":"NE","Value":26},
{"Name":"Nevada","Zip":"NV","Value":27},
{"Name":"New Hampshire","Zip":"NH","Value":28},
{"Name":"New Jersey","Zip":"NJ","Value":29},
{"Name":"New Mexico","Zip":"NM","Value":30},
{"Name":"New York","Zip":"NY","Value":31},
{"Name":"North Carolina","Zip":"NC","Value":32},
{"Name":"North Dakota","Zip":"ND","Value":33},
{"Name":"Ohio","Zip":"OH","Value":34},
{"Name":"Oklahoma","Zip":"OK","Value":35},
{"Name":"Oregon","Zip":"OR","Value":36},
{"Name":"Pennsylvania","Zip":"PA","Value":37},
{"Name":"Rhode Island","Zip":"RI","Value":38},
{"Name":"South Carolina","Zip":"SC","Value":39},
{"Name":"South Dakota","Zip":"SD","Value":40},
{"Name":"Tennessee","Zip":"TN","Value":41},
{"Name":"Texas","Zip":"TX","Value":42},
{"Name":"Utah","Zip":"UT","Value":43},
{"Name":"Vermont","Zip":"VT","Value":44},
{"Name":"Virginia","Zip":"VA","Value":45},
{"Name":"Washington","Zip":"WA","Value":46},
{"Name":"West Virginia","Zip":"WV","Value":47},
{"Name":"Wisconsin","Zip":"WI","Value":48},
{"Name":"Wyoming","Zip":"WY","Value":49},
{"Name":"District Columbia","Zip":"DC","Value":50}
]