$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    navText: ["<img src='prev.png'>","<img src='next.png'>"],
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
	})
});

