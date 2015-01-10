var categories =[];
var namesNodes = [];
var values1 = [];
var values2 = [];
var largest1, largest2, pos, thex, they;
var isFirefox = typeof InstallTrigger !== 'undefined';

(function() { globe.onDefine('window.jQuery && $(".article-graphic.Slopegraphs").length', function() {

	var masterSelector = '.article-graphic.Slopegraphs';
	var master = $(masterSelector);

	$(".transp").height(h);

	for (var i in data[0]) {
		namesNodes.push(i);
	}
	
	$("#center").append('<div class="textcol" id="leftcol">'+splitJoin(namesNodes[1])+'</div>')
	$("#center").append('<div class="textcol" id="rightcol">'+splitJoin(namesNodes[2])+'</div>')	

	for (var i in data) {
		values1.push(data[i][namesNodes[1]]);
		values2.push(data[i][namesNodes[2]]);
	}	

	largest1 = Math.max.apply(Math, values1);
	largest2 = Math.max.apply(Math, values2);

	for (var i in values1) {
		$("#left").append('<div class="dot lines1" style="bottom:'+(((values1[i])*h/largest1)-3)+'px;" id="dot_1_'+i+'"></div>')
		$("#right").append('<div class="dot lines2" style="bottom:'+(((values2[i])*h/largest2)-3)+'px;" id="dot_2_'+i+'"></div>')
	}

	$("#center").append('<svg class="svg" id="svg" height="'+h+'" width="'+$("#center").width()+'">')



	for (var i in data) {
		createLine(i);
	}

	$(window).resize(function(){
		$("#center .svg").remove();
		$(".nametext").remove();
		$(".nametextright").remove();
		$("#center").append('<svg class="svg" id="svg" height="'+h+'" width="'+$("#center").width()+'">')
		for (var i in data) {
			createLine(i);	
		}
	})

	$(".nt").mouseover(function(){
		var id = (this.id).split("_")[1];
		$("#line_"+id).css("stroke-width",5)
		$("#nt_"+id).css("color", "#000").css("font-weight","bold")
		$("#ntr_"+id).css("color", "#000").css("font-weight","bold")
	})

	$(".line").mouseover(function(){
		var id = (this.id).split("_")[1];
		$("#line_"+id).css("stroke-width",5)
		$("#nt_"+id).css("color", "#000").css("font-weight","bold")
		$("#ntr_"+id).css("color", "#000").css("font-weight","bold")
	})

	$(".nt").mouseout(function(){
		$(".line").css("stroke-width",1)
		$(".nt").css("color", "rgba(0,0,0,.2)").css("font-weight","normal")
	})
	$(".line").mouseout(function(){
		$(".line").css("stroke-width",1)
		$(".nt").css("color", "rgba(0,0,0,.2)").css("font-weight","normal")
	})

	if (Modernizr.touch) {   
    	$('.nt').click(function(){
    		showTag(this.id)
    	})
    	$('.line').click(function(){
    		showTag(this.id)
    	})
	} else {   
		if (isFirefox == true) {
			$('.nt').mouseover(function(e){
    			$('#tag').remove();
				pos = $("#slopegraph").offset();
				thex = e.pageX - pos.left;
				they = e.pageY - pos.top;
				if (thex > $("#slopegraph").width() - 200) { thex = $("#slopegraph").width() - 200 };
				if (they > $("#slopegraph").height() - 200) { they = $("#slopegraph").height() - 100 };				
				$("#slopegraph").append('<div id="tag" style="top:'+they+'px; left:'+thex+'px;"><div class="category">'+data[i].Name+'</div><div class="valueNum"><span>'+namesNodes[1]+'</span> '+prefix+nWC(data[i][namesNodes[1]])+suffix+'</div><div class="valueNum"><span>'+namesNodes[2]+'</span> '+prefix2+nWC(data[i][namesNodes[2]])+suffix2+'</div></div>')
			})
			$('.line').mouseover(function(e){
    			$('#tag').remove();
				pos = $("#slopegraph").offset();
				thex = e.pageX - pos.left;
				they = e.pageY - pos.top;
				if (thex > $("#slopegraph").width() - 200) { thex = $("#slopegraph").width() - 200 };
				if (they > $("#slopegraph").height() - 200) { they = $("#slopegraph").height() - 100 };				
				$("#slopegraph").append('<div id="tag" style="top:'+they+'px; left:'+thex+'px;"><div class="category">'+data[i].Name+'</div><div class="valueNum"><span>'+namesNodes[1]+'</span> '+prefix+nWC(data[i][namesNodes[1]])+suffix+'</div><div class="valueNum"><span>'+namesNodes[2]+'</span> '+prefix2+nWC(data[i][namesNodes[2]])+suffix2+'</div></div>')
			})
		} else {
			$('.line').mouseover(function(){
    			showTag(this.id)
    		})
    		$('.nt').mouseover(function(){
    			showTag(this.id)
    		})
		}
   		
    	$('.line').mouseout(function(){
    		$('#tag').remove();
    	})
    	$('.nt').mouseout(function(){
    		$('#tag').remove();
    	})
	} 

}); }());

function splitJoin(x) {
	return( x.split("_").join(" "))
}

function createLine(i) {
	var color;
	if ((values1[i])*h/largest1 > data[i][namesNodes[2]]) {
		color = "rgba(191, 97, 81, .7)"
	} else {
		color = "rgba(157, 186, 115, .8)"
	}

	var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('id','line_'+i);
    newLine.setAttribute('class','line');
    newLine.setAttribute('x1','0');
    newLine.setAttribute('y1',(h-((values1[i])*h/largest1)));
    newLine.setAttribute('x2',$("#center").width());
    newLine.setAttribute('y2',(h-((values2[i])*h/largest2)));
    newLine.setAttribute('stroke', color);
    newLine.setAttribute('stroke-width', linew);
    $("#svg").append(newLine);

	$("#left").append('<div class="nametext nt" id="nt_'+i+'" style="right:.5em; top:'+((h-((values1[i])*h/largest1))-10) +'px">'+data[i].Name+'</div>')
	$("#right").append('<div class="nametextright nt" id="ntr_'+i+'" style="left:.5em; top:'+((h-((values2[i])*h/largest2))-10) +'px">'+data[i].Name+'</div>')
}

function showTag(id) {
		    			$('#tag').remove();
		var i = id.split("_")[1];
		console.log(i)

		pos = $("#slopegraph").offset();
		thex = event.pageX - pos.left;
		they = event.pageY - pos.top;
		if (thex > $("#slopegraph").width() - 200) { thex = $("#slopegraph").width() - 200 };
		if (they > $("#slopegraph").height() - 200) { they = $("#slopegraph").height() - 100 };				
		$("#slopegraph").append('<div id="tag" style="top:'+they+'px; left:'+thex+'px;"><div class="category">'+data[i].Name+'</div><div class="valueNum"><span>'+namesNodes[1]+'</span> '+prefix+nWC(data[i][namesNodes[1]])+suffix+'</div><div class="valueNum"><span>'+namesNodes[2]+'</span> '+prefix2+nWC(data[i][namesNodes[2]])+suffix2+'</div></div>')
			
}

function nWC(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
