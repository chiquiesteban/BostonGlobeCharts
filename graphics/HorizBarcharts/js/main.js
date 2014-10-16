

(function() { globe.onDefine('window.jQuery && $(".article-graphic.HorizBarcharts").length', function() {
	
	var arrayValues = [];

	var masterSelector = '.article-graphic.HorizBarcharts';
	var master = $(masterSelector);

	for (var i in data) {
		arrayValues.push(data[i].Value);
	}

	var largest = Math.max.apply(Math, arrayValues);

	for (var i in data) {
		$("#horizBarchart").append('<div class="row" id="r'+i+'">'+
				'<div class="Name">'+data[i].Name+'</div>'+
				'<div class="Value" style="width:'+(data[i].Value*78)/largest+'%"><span></span></div>'+
				'<div class="ValueNumber">'+preffix+''+numberWithCommas(data[i].Value)+''+suffix+'</div>'+
			'</div>')
	}

	// If you want to highlight a particular chart, change the ID. The first one will be highlighted by default

	$("#r0").addClass("highlight")


}); }());

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
