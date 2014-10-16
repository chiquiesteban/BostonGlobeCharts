var thestate, thevalue, pos, thex, they, largest, smallest, val1, val2, val3, val4,val5, range, netValue, dividedRange, color1, color2, color3, color4, color5, stroke1, stroke2, stroke3, stroke4, stroke5;
var arrayValues = [];


(function() { globe.onDefine('window.jQuery && $(".article-graphic.StatesMap").length', function() {

	var masterSelector = '.article-graphic.StatesMap';
	var master = $(masterSelector);

	var thissvg;
	var isFirefox = typeof InstallTrigger !== 'undefined';

	for (var i in data) {
		arrayValues.push(data[i].Value);
	}
	largest = Math.max.apply(Math, arrayValues);
	smallest = Math.min.apply(Math, arrayValues);
	range = largest-smallest;
	
	if (steps > 5) {
		for (var i in data) {	
			netValue = ((data[i].Value)*100)/range	
			$("#"+data[i].Zip).css("fill", "rgba(191, 97, 81,"+netValue/100+")").css("stroke", "rgba(191, 97, 81,.3")
		} 
	} else {
		if (step1 == 0) {
			dividedRange=range/steps;
			for (var i in data) {	
				if (data[i].Value < dividedRange) {
					$("#"+data[i].Zip).css("fill", "rgba(227, 225, 214, 1)").css("stroke", "rgba(188, 188, 180, 1)")
				} else if (data[i].Value < dividedRange*2) {
					$("#"+data[i].Zip).css("fill", "rgba(253, 205, 128, 1)").css("stroke", "rgba(207, 169, 107, 1)")
				} else if (data[i].Value < dividedRange*3) {
					$("#"+data[i].Zip).css("fill", "rgba(244, 148, 87, 1)").css("stroke", "rgba(200, 120, 71, 1)")
				} else if (data[i].Value < dividedRange*4) {
					$("#"+data[i].Zip).css("fill", "rgba(191, 97, 81, 1)").css("stroke", "rgba(163, 82, 68, 1)")
				} else {
					$("#"+data[i].Zip).css("fill", "rgba(124, 31, 25, 1)").css("stroke", "rgba(104, 20, 13, 1)")
				}
			}

			for (var i = steps - 1; i >= 0; i--) {
				$("#key").append('<div class="keyel"><div class="keysq color'+i+'"></div><div class="keytxt">'+(dividedRange*i).toFixed(decimals)+"-"+(dividedRange*(i+1)).toFixed(decimals)+'</div></div>')
			}
		} else {
			var limit1 = step1.split("-");
			var limit2 = step2.split("-");
			var limit3 = step3.split("-");
			var limit4 = step4.split("-");
			for (var i in data) {	
				if (data[i].Value < limit1[1]) {
					$("#"+data[i].Zip).css("fill", "rgba(227, 225, 214, 1)").css("stroke", "rgba(188, 188, 180, 1)")
				} else if (data[i].Value < limit2[1]) {
					$("#"+data[i].Zip).css("fill", "rgba(253, 205, 128, 1)").css("stroke", "rgba(207, 169, 107, 1)")
				} else if (data[i].Value < limit3[1]) {
					$("#"+data[i].Zip).css("fill", "rgba(244, 148, 87, 1)").css("stroke", "rgba(200, 120, 71, 1)")
				} else if (data[i].Value < limit4[1]) {
					$("#"+data[i].Zip).css("fill", "rgba(191, 97, 81, 1)").css("stroke", "rgba(163, 82, 68, 1)")
				} else {
					$("#"+data[i].Zip).css("fill", "rgba(124, 31, 25, 1)").css("stroke", "rgba(104, 20, 13, 1)")
				}
			}

			for (var i = steps - 1; i >= 0; i--) {
				$("#key").append('<div class="keyel"><div class="keysq color'+i+'"></div><div class="keytxt">'+window["step"+[i+1]]+'</div></div>')
			}
		}
	}

	

	if(isFirefox == true) {
		var mysvg = document.getElementById("svg");
		var mysvgw = mysvg.getAttributeNS(null,'width')
		mysvg.getAttributeNS('height', mysvgw*0.618);

	  	$(".state").mouseover( function(evt){
	    	thissvg = evt.target;
			$(thissvg)
				.css("cursor","pointer")
				.css("opacity",".5")
				.css("filter","alpha(opacity=50%)");
			for (var i in data) {
				if (this.id == data[i].Zip) {thestate = data[i].Name; thevalue = data[i].Value}
			}
			pos = $("#chart").offset();
			thex = evt.pageX - pos.left;
			they = evt.pageY - pos.top;
			if (thex > $("#chart").width() - 200) { thex = $("#chart").width() - 200 };
			if (they > $("#chart").height() - 200) { they = $("#chart").height() - 100 };
			$("#tag").remove();

			$("#label").remove();
			$('#chart').append('<div id="label" style="top:'+they+'px; left:'+thex+'px;"><div class="statename">'+thestate+'</div><div class="value">'+nWC(thevalue)+'</div></div>')	
		});
	  	$(".state").mouseout( function(evt){
			thissvg = evt.target;
			$(thissvg)
				.css("opacity","1")
				.css("filter","alpha(opacity=100%)");
		});

	  	$(window).resize(function(){
	  		mysvgw = mysvg.getAttributeNS(null,'width')
			mysvg.getAttributeNS('height', mysvgw*0.618);
		})

	} else {
		$("#svg").height($("#svg").width()*0.618)
    	$(".state").mouseover( function(e){
    		thissvg = $(event.target).parent();
			$(thissvg)
				.css("cursor","pointer")
				.css("opacity",".5")
				.css("filter","alpha(opacity=20%)");
			for (var i in data) {
				if (this.id == data[i].Zip) {thestate = data[i].Name; thevalue = data[i].Value}
			}
			pos = $("#chart").offset();
			thex = e.pageX - pos.left;
			they = e.pageY - pos.top;
			if (thex > $("#chart").width() - 200) { thex = $("#chart").width() - 200 };
			if (they > $("#chart").height() - 200) { they = $("#chart").height() - 100 };
			$("#tag").remove();

			$("#label").remove();
			$('#chart').append('<div id="label" style="top:'+they+'px; left:'+thex+'px;"><div class="statename">'+thestate+'</div><div class="value">'+nWC(thevalue)+'</div></div>')
		});
		$(".state").mouseout( function(){
			thissvg = $(event.target).parent();
			$(thissvg)
				.css("opacity","1")
				.css("filter","alpha(opacity=100%)");
		});

		$(window).resize(function(){
			$("#svg").height($("#svg").width()*0.618)
		})
	}


}); }());

function nWC(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};