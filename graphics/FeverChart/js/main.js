(function() { globe.onDefine('window.jQuery && $(".igraphic-graphic.FeverChart").length', function() {

	var masterSelector = '.igraphic-graphic.FeverChart';
	var master = $(masterSelector);

	var hed = $('.hed', master);
	if (hed.length) {
		$('.header .main-hed').html(hed.html());
	}

	var subhed = $('.subhed', master);
	if (subhed.length) {
		$('.header .subhed').html(subhed.html());
	}

	$('.header').addClass('visible');

}); }());