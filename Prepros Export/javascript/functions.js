$(function() {
	smoothScroll(3000);
	workBelt();
	workLoad();
	
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {
	$('.thumb-unit').click(function() {
		$('.work-belt').css('left', '-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function() {
		$('.work-belt').css('left', '0%');
		$('.work-container').hide(800);
	});

}

function workLoad() {
	$.ajaxSetup({ cache: true });
	
	$('.thumb-unit').click(function() {
		
		var spinner = '<div class="loader">Loading...</div>',
			newHTML = '/home/roger/Desktop/portfolio/work/work-1.html';
		$('.project-load').html(spinner).load(newHTML);

	});
}