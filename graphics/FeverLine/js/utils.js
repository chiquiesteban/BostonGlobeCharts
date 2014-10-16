//Create your spreadsheet, name the columns using Name for the date (can be a month, a day, a year...) 
//Use _ to separate words, the text on top of the column will be used for the labels

var data = [{"Name":1998,"Red_Sox":1,"Patriots":6,"Celtics":5},
{"Name":1999,"Red_Sox":2,"Patriots":7,"Celtics":6},
{"Name":2000,"Red_Sox":3,"Patriots":8,"Celtics":7},
{"Name":2001,"Red_Sox":4,"Patriots":9,"Celtics":8},
{"Name":2002,"Red_Sox":5,"Patriots":10,"Celtics":9},
{"Name":2003,"Red_Sox":6,"Patriots":25,"Celtics":10},
{"Name":2004,"Red_Sox":12,"Patriots":12,"Celtics":11},
{"Name":2005,"Red_Sox":4,"Patriots":13,"Celtics":12},
{"Name":2006,"Red_Sox":9,"Patriots":14,"Celtics":13},
{"Name":2007,"Red_Sox":12.5,"Patriots":15,"Celtics":14},
{"Name":2008,"Red_Sox":15,"Patriots":20,"Celtics":15},
{"Name":2009,"Red_Sox":12,"Patriots":17,"Celtics":16},
{"Name":2010,"Red_Sox":13,"Patriots":18,"Celtics":17}]

// Add any suffix you want to include with the data, like 'F', 'm' or 'days'
var prefix = "$";
var suffix = "m";

// I want to show an X axis label each XXX steps. If there are 90 datapoints and I want to show three steps, the number should be 30. 1 is default and will show all
var steps = 1;