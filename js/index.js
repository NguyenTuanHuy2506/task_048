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
			_menu.addClass('active');
			_menu.addClass('bounceInLeft');
			_this.addClass('active');
			delayF(function(){
				_menuOpen = 1;
				_menu.removeClass('bounceInLeft')}, 1000)();
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
				_menu.removeClass('active');
				_menu.removeClass('bounceOutLeft');
				_menuOpen = 0;}, 1000)();
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
	// else{
	// 	if(_ts.hasClass('active')){
	// 		_menuSub.toggle('slow');
	// 		delayF(function(){
	// 			_ts.removeClass('active');
	// 			_menuSubOpen = 0;
	// 			}, 1000)();
	// 	}
	// 	else {
	// 		console.log('asdf')
	// 		$('.drop-menu__item.active > .drop-menu__sub').toggle('slow', function(){
	// 			_menuSub.toggle('slow');
	// 			_ts.addClass('active');
	// 			$('.drop-menu__item.active').removeClass('active');
	// 			_menuSubOpen = 0;
	// 		});
			
			
	// 		return false;
	// 	}
	// }		
});


window.addEventListener("wheel", function(e){if(_menuOpen == 1){e.preventDefault();}}, {passive: false} );

//----------delay function-------//
function delayF(func, timed){
	let timeout;
	return function(){
		let _f = func;
		clearTimeout(timeout);
		timeout = setTimeout(_f, timed);
	};
}