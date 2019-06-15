var rellax = new Rellax('.rellax');


/* 

*
*  ------- Slider  
*

*/

var flag = 1;
var slide1 = $('.slide-1');
var slide2 = $('.slide-2');
var slide3 = $('.slide-3');

var next = $(".prev-next-btn #next");
var prev = $(".prev-next-btn #prev");

slide2.hide();
slide3.hide();

var intervals = setInterval(slide,500);
var intervals2 = setInterval(notslide,500);

function slide(){


	if(flag == 1){
		$('.slide-1').fadeIn();
		$('.slide-2').hide();
		$('.slide-3').hide();

		$(".image-slider-1").fadeIn();
		$(".image-slider-2").hide();
		$(".image-slider-3").hide();
		setTimeout(function(){
			flag = 2;
		},3000);
	}
	if(flag == 2){
		$('.slide-2').fadeIn();
		$('.slide-1').hide();
		$('.slide-3').hide();

		$(".image-slider-2").fadeIn();
		$(".image-slider-1").hide();
		$(".image-slider-3").hide();
		setTimeout(function(){
			flag = 3;
		},3000);
	}
	if(flag == 3){
		$('.slide-3').fadeIn();
		$('.slide-2').hide();
		$('.slide-1').hide();

		$(".image-slider-3").fadeIn();
		$(".image-slider-1").hide();
		$(".image-slider-2").hide();
		setTimeout(function(){
			flag = 1;
		},3000);
	}
}

function notslide(){
	if(flag == 1){
		$('.slide-1').fadeIn();
		$('.slide-2').hide();
		$('.slide-3').hide();
	}
	if(flag == 2){
		$('.slide-2').fadeIn();
		$('.slide-1').hide();
		$('.slide-3').hide();

	}
	if(flag == 3){
		$('.slide-3').fadeIn();
		$('.slide-2').hide();
		$('.slide-1').hide();

	}
	


}
$("#next").click(function(){
	flag += 1;
	if(flag == 4){
		flag = 1;
	}
});
$("#prev").click(function(){
	flag -= 1;
	if(flag == 0){
		flag = 3;
	}
});


$("#next,#prev").mouseenter(function(){
	clearInterval(intervals);
	intervals2 = setInterval(notslide,500);
});

$("#next,#prev").mouseleave(function(){
	intervals = setInterval(slide,500);
	clearInterval(intervals2);
});





/* 

*
*  ------- Slider  
*

*/







// OTHER

$('.img1').mouseenter(function(){
	$(".disc1").css({"top":"13%","transition":"all 0.3s"});
})
$('.img1').mouseleave(function(){
	$(".disc1").css({"top":"40%","transition":"all 0.3s "});
})

$('.img2').mouseenter(function(){
	$(".disc2").css({"top":"13%","transition":"all 0.3s"});
})
$('.img2').mouseleave(function(){
	$(".disc2").css({"top":"40%","transition":"all 0.3s "});
})

$('.img3').mouseenter(function(){
	$(".disc3").css({"top":"13%","transition":"all 0.3s"});
})
$('.img3').mouseleave(function(){
	$(".disc3").css({"top":"40%","transition":"all 0.3s "});
})







// Light gallery
lightGallery(document.getElementById('lightgallery'));







// Scroll

window.onscroll = function() {scrolling()};

function scrolling() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("nav").css({"background":"rgba(154,5,89,1)","transition":"all 0.3s"});
    $(".logo,nav ul").css({"margin":"20px","transition":"all 0.3s"});
  } else {
    $("nav").css({"background":"rgba(154,5,89,0)","transition":"all 0.3s"});
     $(".logo,nav ul").css({"margin":"30px","transition":"all 0.3s"});
  }
}

if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	$("nav").css({"background":"rgba(154,5,89,1)","transition":"all 0.3s"});
	$(".logo,nav ul").css({"margin":"20px","transition":"all 0.3s"});
} 
else {
	$("nav").css({"background":"rgba(154,5,89,0)","transition":"all 0.3s"});
 	$(".logo,nav ul").css({"margin":"30px","transition":"all 0.3s"});
}




// NAV
$(".mynav").hide();
$(".close-button").hide();
$(".close-button").click(function(){
	$(".mynav").slideUp();
	$(".mynav").css({"right":"0%"});
	$(".close-button").fadeOut();
})
$(".open-button").click(function(){
	$(".mynav").slideDown();
	$(".close-button").fadeIn();
	$(".close-button").css({"right":"5%","transition":"all 0.5s"});
	$(".mynav").css({"right":"0%"});
})