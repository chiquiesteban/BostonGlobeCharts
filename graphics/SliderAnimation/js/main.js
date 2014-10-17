var val, val2, percentage, whereiam, whereiam2,intmov, intmov2, intmovpct, intmovpct2;
var whereileft2 = 0; 
var whereileft = 0;

(function() { globe.onDefine('window.jQuery && $(".article-graphic.SliderAnimation").length', function() {

	var masterSelector = '.article-graphic.SliderAnimation';
	var master = $(masterSelector);

	for (var i in data) {
	
		if (i == 0) {
			$('#bigimage').append('<img class="imagerotation" id="img'+i+'" src="'+data[i][0]+'">')
		} else {
			$('#bigimage').append('<img class="imagerotation" id="img'+i+'" style="display:none" src="'+data[i][0]+'">')
		}
	}	
		
	var imgw = $("#bigimage").width()
	$("#bigimage").css("height", imgw*ratio); 
	$("#bigimagery").css("height", imgw*ratio); 
		
	$(window).resize(function(){
		imgw = $("#bigimage").width()
		$("#bigimage").css("height", imgw*ratio); 
		$("#bigimagery").css("height", imgw*ratio);
	})
	
	detectmob();

}); }());

function detectmob() { 

 	var sumd = 100/data.length;

	 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){
	   	
		$("#bigimage").bind("touchstart",function(e){whereiam = e.originalEvent.touches[0].pageX;})
		
		$("#bigimage").bind("touchmove",function(event){
		  event.preventDefault();
		  var e = event.originalEvent;  
		  val = e.targetTouches[0].pageX;
		  intmov = val-whereiam;
		  intmovpct = ((intmov*100)/$("#bigimagery").width())+whereileft;
		  if (intmovpct > 100){intmovpct = 100;}
		  if (intmovpct < 0){intmovpct = 0;}    
		  
		  for (var h in data) {		 
				if (intmovpct >= h*sumd && intmovpct < (h*sumd+sumd)) {
				 $('.imagerotation').css("display", "none"); 
				 $('#img'+h).css("display", "inline");	
				 $('#text-container').empty().append(data[h][1]);
				} 
			 }
				
	   });   
   
   $("#bigimage").bind("touchend",function(event){whereileft = intmovpct;})  

   $("#text-container").append("Swipe the image with your finger")
  
  } else {
	 
	  $("#text-container").append("Drag the slider")
	
		 $("#slider").slider()

	 
	 $("#slider").on("slide", function(event, ui) {
	
		 for (var k in data) {		 
			if (ui.value >= k*sumd && ui.value < (k*sumd+sumd)) {
			 $('.imagerotation').css("display", "none"); 
			 $('#img'+k).css("display", "inline");	
			 $('#text-container').empty().append(data[k][1]);
			} 
		 }
	});
	    
  }
}