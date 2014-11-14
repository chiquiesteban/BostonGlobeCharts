var theconcept, pos, thex, they;
var nameNodes = [];
var isFirefox = typeof InstallTrigger !== 'undefined';

(function() { globe.onDefine('window.jQuery && $(".article-graphic.StackedBarchart").length', function() {

	var masterSelector = '.article-graphic.StackedBarchart';
	var master = $(masterSelector);

	for (var i in data) {
		$("#stackedBarchart").append('<div class="row">'+
				'<div class="concept">'+data[i].Concept+'</div>'+
				'<div class="bar" id="bar'+i+'"></div>'+
			'</div>')
	}

	for (var i in data[0]) {
		nameNodes.push(i);
	}

	for (var i in data) {
		for (var j in nameNodes) {

			if (j>0) {

				$("#bar"+i).append('<div class="portion color'+j+'" id="id_'+i+"_"+j+'" style="width:'+data[i][nameNodes[j]]+'%;"><span>'+prefix+data[i][nameNodes[j]]+suffix+'</span></div>')
				if ($("#bar"+i+" .color"+j).width() < 50 ) {
					$("#bar"+i+" .color"+j+" span").css("display", "none") 
				}
			}
		}
	}

	for (var i in nameNodes) {
		if (i>0) {
			theconcept = nameNodes[i].split("_").join(" ");
			$('#key').append('<div class="keyel">'+
						'<div class="keysq color'+i+'"></div>'+
						'<div class="keytext">'+theconcept+'</div>'+
					'</div>')
		}	
	}

	if (Modernizr.touch) {   
    	$('.portion').click(function(){
    		showTag(this.id)
    	})
	} else {   
   		$('.portion').mouseover(function(){
    		showTag(this.id)
    	})
    	$('.portion').mouseout(function(){
    		$('#tag').remove();
    	})
	}  

}); }());

function showTag(id){
	$('#tag').remove();
	$(".portion").css("-moz-box-shadow","inset 0 0 0 #000000").css("-webkit-box-shadow","inset 0 0 0 #000000").css("box-shadow","inset 0 0 0 #000000")
	var thei = id.split("_")[1];
	var thej = id.split("_")[2];

	pos = $("#stackedBarchart").offset();
	thex = event.pageX - pos.left;
	they = event.pageY - pos.top;
	if (thex > $("#stackedBarchart").width() - 200) { thex = $("#stackedBarchart").width() - 200 };
	if (they > $("#stackedBarchart").height() - 200) { they = $("#stackedBarchart").height() - 100 };
			

	for (var i in data) {
		$("#id_"+i+"_"+thej).css("-moz-box-shadow","inset 0 0 3px #000000").css("-webkit-box-shadow","inset 0 0 3px #000000").css("box-shadow","inset 0 0 3px #000000")
	}
	$("#stackedBarchart").append('<div id="tag" style="top:'+they+'px; left:'+thex+'px;"><div class="category">'+nameNodes[thej].split("_").join(" ")+'</div><div class="valueNum">'+prefix+data[thei][nameNodes[thej]]+suffix+'</div></div>')

}