$(function(){
	w = $(window).width();
	h = $(window).height();

	$('.hovercard-open').click(function(){
		var top = $(document).scrollTop();
		$('.hovercard').hide().show();
		
		$('body').css({
			'overflow' : 'hidden'
		});
		
		$('.hovercard').css({
			'margin-top' : (top+50) + 'px',
			'width' : (w*0.9) + 'px',
			'margin-left' : '50' + 'px',
			'height' : h + 'px'
		});
	});

	$('#hovercard-close').click(function(){
		$('.hovercard').hide();
		$('body').css({
			'overflow' : 'auto'
		});
	});
});