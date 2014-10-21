var count = 0;
var pos, thex, they;

(function() { globe.onDefine('window.jQuery && $(".article-graphic.NextNext").length', function() {

	var masterSelector = '.article-graphic.NextNext';
	var master = $(masterSelector);

	var isFirefox = typeof InstallTrigger !== 'undefined';

	if (data.length > 15) {
		$("#central").css("width", "40%");
		$(".arrow").css("width", "27.5%")
	} else if (data.length >25) {
		$("#central").css("width", "60%");
		$(".arrow").css("width", "17.5%")
	} else if (data.length >35) {
		$("#central").css("width", "80%");
		$(".arrow").css("width", "7.5%")
	} else {}

	for (var i in data) {
		$("#central").append('<div class="ball" id="b'+i+'"></div>');
		$("#b0").addClass("select");
		createBall();

		$(window).resize(function(){
			createBall()
		})
	}

	$("#date").append(data[0].Date);
	$("#body").append(data[0].Text);
	if (data[0].Image != 0) {
		$("#image").append("<img src="+data[0].Image+">");
	}
	

		$(".ball").click(function(){
			var i=this.id.split("b");
			$("#date").empty();
			$("#body").empty();
			$("#image").empty();
			$("#date").append(data[i[1]].Date);
			$("#body").append(data[i[1]].Text);
			if (data[i[1]].Image != 0) {
				$("#image").append("<img src="+data[i[1]].Image+">");
			}
			$(".ball").removeClass("select");
			$("#"+this.id).addClass("select");
		});

		if (Modernizr.touch) { } else {
			
				if(isFirefox == true) {
					$(".ball").mouseover(function(evt){
						var i=this.id.split("b");
						$('#tag').remove();
						pos = $("#content").offset();
						thex = evt.pageX - pos.left;
						they = evt.pageY - pos.top;
						if (thex > $("#content").width() - 200) { thex = $("#content").width() - 200 };
						$('#content').append('<div id="tag" style="top:'+they+'px; left:'+thex+'px;">'+data[i[1]].Date+'</div>')
					})
				} else {
					$(".ball").mouseover(function(e){
						var i=this.id.split("b");
						$('#tag').remove();
						pos = $("#content").offset();
						thex = e.pageX - pos.left;
						they = e.pageY - pos.top;
						if (thex > $("#content").width() - 200) { thex = $("#content").width() - 200 };
						$('#content').append('<div id="tag" style="top:50px; left:'+thex+'px;">'+data[i[1]].Date+'</div>')
					})
				}

				$(".ball").mouseout(function(){$('#tag').remove() })
		}


		$("#next").click(function(){
			if (count < (data.length-1)) {count++} else {count=(data.length-1)};
			$("#date").empty();
			$("#body").empty();
			$("#image").empty();
			$("#date").append(data[count].Date);
			$("#body").append(data[count].Text);
			if (data[count].Image != 0) {
				$("#image").append("<img src="+data[count].Image+">");
			}
			$(".ball").removeClass("select");
			$("#b"+count).addClass("select");
		})

		$("#prev").click(function(){
			if (count > 0) {count--} else {count = 0};
			$("#date").empty();
			$("#body").empty();
			$("#image").empty();
			$("#date").append(data[count].Date);
			$("#body").append(data[count].Text);
			if (data[count].Image != 0) {
				$("#image").append("<img src="+data[count].Image+">");
			}
			$(".ball").removeClass("select");
			$("#b"+count).addClass("select");
		})

}); }());

function createBall(){
	$(".ball").css("width",70/data.length+"%").css("margin",15/data.length+"%");
	var e = $("#b0").width();
	$(".ball").css("height",e)
}