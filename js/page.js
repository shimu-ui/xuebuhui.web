$(function(){	
	//导航
    $(window).on('scroll', function() {
        if ($(document).scrollTop() > 200) {
            $('.menubox').addClass('solid').removeClass('moveDown');
        } else {
            $('.menubox').removeClass('solid').addClass('moveDown');
        }
    });	
    
	
})
