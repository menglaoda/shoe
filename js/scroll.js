$(function(){
	$(window).mousewheel(function(event, delta, deltaX, deltaY) {  
	    $(".obox").html(delta+","+ deltaX+","+ deltaY)
	});  
})
