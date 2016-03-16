$(function(){
	$('.app_bg, .app_main, .Slideshow, .app_bg_logo, .app_slideshow_content, .app_credits, .app_marquee').css({
		 'height' : $(window).height() + 'px'
	});
		
	$(document).on("pagecreate","#app_main",function(){
		$('.app_bg, .app_main, .Slideshow, .app_bg_logo, .app_slideshow_content, .app_credits, .app_marquee').css({
			 'height' : $(window).height() + 'px'
		});
	});
	
	
});