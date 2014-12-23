$(function () {

	$("img.lazy").lazyload({
    	effect: "fadeIn"
	});

	$(window).scroll(function() {
		var now = $(window).scrollTop();

		if(now > 150) {
			$('#page-top').fadeIn('slow');
		} else {
			$('#page-top').fadeOut('slow');
		}
		});

		$('#move-page-top').click(function() {
			$('html,body').animate({scrollTop:0},'fast');
		});


		$('.fa-search').click(function() {
			// var win = $(window).innerWidth();
			// console.log(win);
			if ($('.search-form2').css("position") == "absolute" ){
				$('.search-form2').slideToggle('fast');
				return false;
			}
	});

	$('.toggle-nav').click(function() {
		toggleNav();
		changeButton();
	});

	$(window).resize(function(event) {
		// var win = $(window).innerWidth();
		// console.log(win);
		if ($('.search-form2').css("position") == "relative" ){
			$('.search-form2').show();
		} else {
			$('.search-form2').hide();
		}
	});

});

function toggleNav() {
    if ($('#wrapper').hasClass('show-nav')) {

        $('#wrapper').removeClass('show-nav');
    } else {

        $('#wrapper').addClass('show-nav');
    }

    //$('#wrapper').toggleClass('show-nav');
}

function changeButton() {
	if ($('.changable-button').hasClass('fa-bars')) {

        $('.changable-button').removeClass('fa-bars');
        $('.changable-button').addClass('fa-times');
    } else {

        $('.changable-button').addClass('fa-bars');
        $('.changable-button').removeClass('fa-times');
    }
}

