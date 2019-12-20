$(document).ready(function(){
  $('.owl-one').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        900:{
            items:4
        }
    }
	});
});
$(document).ready(function(){
  $('.owl-two').owlCarousel({
    loop:true,
    margin: 25,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        900:{
            items:3
        }
    }
	});
});

