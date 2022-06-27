
$(document).ready(function(){
	 $(".owl-carousel").owlCarousel({
	    loop:true,
	    margin:10,
	    // nav:true,
	    animateOut: 'fadeOut',
	    autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});


	if($(window).width()>1130){
		$(window).bind("scroll",function(){
			let a=$("html,body").scrollTop();
			if(a==681){
				$(".menu").animate({
					bottom: '215px'
				});
			}
		});
	}
});

$(".owl-carousel").on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});



$(".icon-menu").click(function(event){
	$("#menu-head").slideDown("slow");
	$("#content").animate({
		top: '180px'
	});
});
$("#close").click(function(event){
	$("#menu-head").slideUp("slow");
	$("#content").animate({
		top: '0px'
	});
});


