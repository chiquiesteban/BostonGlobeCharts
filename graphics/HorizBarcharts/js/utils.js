// Create a spreadsheet with the fields 'Name' and 'Value',  
// Copy the cells and pass it by http://shancarter.github.io/mr-data-converter/  Use the default (JSON - Properties)
// Replace in var data

var data = 
	[{"Name":"Element","Value":8900.3},
	{"Name":"Element","Value":6500},
	{"Name":"Element","Value":5500},
	{"Name":"Element","Value":5300.4},
	{"Name":"Element","Value":3500},
	{"Name":"Element","Value":1200},
	{"Name":"Element","Value":1000.4},
	{"Name":"Element","Value":900.8},
	{"Name":"Element","Value":800},
	{"Name":"Element","Value":600.45},
	{"Name":"Element","Value":300},
	{"Name":"Element","Value":50}];

// Use a suffix or preffix if you want to include units or any other character after the value, in this example, we use m for millions. But can be left just as var suffix=""
var preffix = "";
var suffix = "%";