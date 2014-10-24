var color1 = "#e7e6dd"
var color2 = "#fdcd80"
var color3 = "#f49457"
var color4 = "#bf6151"

var isFirefox = typeof InstallTrigger !== 'undefined';
var pos, thex, they, thelabel, thevalue, thefinallabel;
var nameNodes = [];
var allNumbers = [];

(function() { globe.onDefine('window.jQuery && $(".article-graphic.HeatMap").length', function() {

	var masterSelector = '.article-graphic.HeatMap';
	var master = $(masterSelector);

	for (var i in data[0]) {
		nameNodes.push(i);
	}
	
	for (var i in data) {
		if (i<(data.length-1)){
			$("#chart").append('<div class="row" id="r'+i+'">'+
					'<div class="nameRow">'+data[i].Councilor+'</div>'+
					'<div class="cells" id="h'+i+'"></div>'+
				'</div>')
		}
	}

	for (var i in data) {		
			for (var j in nameNodes) {
				if (j>0) {
					$("#h"+i).append('<div class="piececell" id="'+nameNodes[j]+"__"+i+'"></div>')
					allNumbers.push(data[i][nameNodes[j]])
				}
			}
	}

	var largest = Math.max.apply(Math, allNumbers);
	var theval;
	for (var i in data) {	
			for (var j in nameNodes) {
				if (j>0) {
					theval = (data[i][nameNodes[j]]*100)/largest;

					$("#"+nameNodes[j]+"__"+i).css("opacity", "0."+((data[i][nameNodes[j]])*100/largest).toFixed(0)).css("filter", "alpha(opacity="+((data[i][nameNodes[j]])*100/largest).toFixed(0)+"%)")
					
					if ( theval > 0 && theval < 25) {
						$("#"+nameNodes[j]+"__"+i).css("background", color1)
					} else if ( theval > 24.99 && theval < 50) {
						$("#"+nameNodes[j]+"__"+i).css("background", color2)
					} else if ( theval > 49.99 && theval < 75) {
						$("#"+nameNodes[j]+"__"+i).css("background", color3)
					} else if ( theval > 74.99){
						$("#"+nameNodes[j]+"__"+i).css("background", color4)
					}
				}
			}
	}

	$("#charthead").append('<div class="nameRow">'+nameNodes[0]+'</div>')
	for (var i in nameNodes) {
		if (i>0) {
			thelabel = nameNodes[i].split("_").join(" ");
			$("#charthead").append('<div class="piececell" id="pc_'+i+'">'+thelabel+'</div>')
		}
	}

	if (Modernizr.touch) { 
		$(".piececell").click(function(e){
			thelabel = (this.id).split("__");
			thefinallabel = (thelabel[0]).split("_").join(" ");
			thevalue = data[thelabel[1]][thelabel[0]];
			$("#tag").remove();
			pos = $("#chart").offset();
			thex = e.pageX - pos.left;
			they = e.pageY - pos.top;
			if (thex > $("#chart").width() - 100) { thex = $("#chart").width() - 100 };
			if (they > $("#chart").height() - 100) { they = $("#chart").height() - 100 };
			$('#chart').append('<div id="tag" style="top:'+(they+20)+'px; left:'+(thex+20)+'px;"><div class="name">'+thefinallabel+'</div><div class="value">'+nWC(thevalue)+'</div></div>')	
		})
	} else {
		if(isFirefox == true) {
			$(".piececell").mouseover(function(evt){
				thelabel = (this.id).split("__");
				thefinallabel = (thelabel[0]).split("_").join(" ");
				thevalue = data[thelabel[1]][thelabel[0]];
				$("#tag").remove();
				pos = $("#chart").offset();
				thex = evt.pageX - pos.left;
				they = evt.pageY - pos.top;
				if (thex > $("#chart").width() - 100) { thex = $("#chart").width() - 100 };
				if (they > $("#chart").height() - 100) { they = $("#chart").height() - 100 };
				$('#chart').append('<div id="tag" style="top:'+(they+20)+'px; left:'+(thex+20)+'px;"><div class="name">'+thefinallabel+'</div><div class="value">'+nWC(thevalue)+'</div></div>')	
			})
		} else {
			$(".piececell").mouseover(function(e){
				thelabel = (this.id).split("__");
				thefinallabel = (thelabel[0]).split("_").join(" ");
				thevalue = data[thelabel[1]][thelabel[0]];
				$("#tag").remove();
				pos = $("#chart").offset();
				thex = e.pageX - pos.left;
				they = e.pageY - pos.top;
				if (thex > $("#chart").width() - 100) { thex = $("#chart").width() - 100 };
				if (they > $("#chart").height() - 100) { they = $("#chart").height() - 100 };
				$('#chart').append('<div id="tag" style="top:'+(they+20)+'px; left:'+(thex+20)+'px;"><div class="name">'+thefinallabel+'</div><div class="value">'+nWC(thevalue)+'</div></div>')	
			})

		}

		$(".piececell").mouseout(function(){
			$("#tag").remove()
		})
	}

	for (var i in nameNodes) {
		if (i>0) {
			if (i%steps == 0) {
				$("#pc_"+i).css("visibility", "visible")
			} else {
				$("#pc_"+i).css("visibility", "hidden")
			}
		}
	}

}); }());


function nWC(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};