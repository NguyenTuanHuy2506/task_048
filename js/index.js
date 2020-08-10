$('.emp-slick').slick({
	dots: false,
	slidesToShow: 3,
  	slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 2000,
  	prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  	nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>'
});

//----------hambuger button-------//
var _menuOpen = 0;
$('.hambuger-button').click(function(){
	var _this = $(this);
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
		else {return false;}
	}		
});


$('.drop-menu__item > h3 >.nav-link').click(function(e){

	var _o = $(this).parents('.drop-menu__item');
	console.log(_o);
	if(_o.hasClass('active')){
		_o.removeClass('active');
	}
	else{
		_o.addClass('active');
		
	}
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