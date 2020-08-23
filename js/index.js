$('.emp-slick').slick({
	dots: false,
	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 2000,
  	prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  	nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  	responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

//----------hambuger button-------//
var _menuOpen = 0;
$('.hambuger-button').click(function(){
	let _this = $(this);
	var _menu = $('.header__drop-menu');
	if(_menuOpen == 0)
	{
		if(!_this.hasClass('active')){
			_menu.addClass('active').addClass('bounceInLeft');
			_this.addClass('active');
			delayF(function(){
				_menuOpen = 1;
				_menu.removeClass('bounceInLeft')}, 800)();
		}
		else{
			return false;
		}
	}
	else{
		if(_this.hasClass('active')){

			_menu.addClass('bounceOutLeft');
			delayF(function(){
				_this.removeClass('active');
				_menu.removeClass('active').removeClass('bounceOutLeft');
				_menuOpen = 0;}, 800)();
		}
		else {
			return false;
		}
	}		
});


var _menuSubOpen = 0;
$('.drop-menu__item > h3 > .nav-link').click(function(e){

	var _ts = $(this).parents('.drop-menu__item');
	var _menuSub = _ts.find('.drop-menu__sub');

	if(!_ts.hasClass('active')){
		$('.drop-menu__item.active').find('.drop-menu__sub').toggle('slow');
		$('.drop-menu__item.active').removeClass('active');
		delayF(function(){
			_menuSub.toggle('fast');
			_ts.addClass('active');
		},300)();
	}
	else{
		
		delayF(function(){
			_menuSub.toggle('fast');
			_ts.removeClass('active');
		},300)();
	}		
});


window.addEventListener("wheel", function(e){if(_menuOpen == 1){e.preventDefault();}}, {passive: false} );
//----------scroll-------//
$(window).on('load resize scroll', function(){
	var _scroll = $(window).scrollTop();
	var _toTopButton = $('.to-top-button');
	var _wh = $(window).height();
	//--------to top button
	if(_scroll > 400)
	{
		if(!_toTopButton.hasClass('active')){
			_toTopButton.addClass('active');
		}
	} else{
		_toTopButton.removeClass('active');
	}
	return false;
});

$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: 0//$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
    return false;
});
//----------delay function-------//
function delayF(func, timed){
	let timeout;
	return function(){
		let _f = func;
		clearTimeout(timeout);
		timeout = setTimeout(_f, timed);
	};
}