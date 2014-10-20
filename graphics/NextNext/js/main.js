(function() { globe.onDefine('window.jQuery && $(".article-graphic.NextNext").length', function() {

	var masterSelector = '.article-graphic.NextNext';
	var master = $(masterSelector);

	for (var i in data) {
		$("#central").append('<div class="ball" id="b'+e+'"></div>');
		$("#b0").addClass("select");
		$("#date").append(data[0].Date);
		$("#body").append(data[0].Text);
		createBall();

		$(window).resize(function(){
			createBall()
		})

		$(".ball").click(function(){
			var i=this.id.split("b");
			$("#date").empty();
			$("#body").empty();
			$("#date").append(data[i[1]].Date);
			$("#body").append(data[i[1]].Text);
			$(".ball").removeClass("select");
			$("#"+this.id).addClass("select");
			where=i[1]
		});

		$("#next").click(function(){
			where<data.length-1?(where++,$("#date").empty(),$("#body").empty(),$("#date").append(data[where].Date),$("#body").append(data[where].Text),$(".ball").removeClass("select"),$("#b"+where).addClass("select"),$("#next").css("color","#000"),$("#prev").css("color","#000")):($("#next").css("color","#FFF"),$("#prev").css("color","#000"))}),$("#prev").click(function(){where>0?(where--,$("#date").empty(),$("#body").empty(),$("#date").append(data[where].Date),$("#body").append(data[where].Text),$(".ball").removeClass("select"),$("#b"+where).addClass("select"),$("#prev").css("color","#000"),$("#next").css("color","#000")):($("#prev").css("color","#FFF")
				$("#next").css("color","#000"))
		})
	}
}); }());

function createBall(){
	$(".ball").css("width",80/data.length+"%").css("margin",5/data.length+"%");
	var e=$("#b0").width();
	$(".ball").css("height",e).css("border-radius",e/2)
}