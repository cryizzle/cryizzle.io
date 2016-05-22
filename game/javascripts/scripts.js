function greet(){
	name = $('#name').val();
	if (name==''){
		name='Player';
	}
	$('#greet').html(name);
	$('#slides1').superslides('animate', 1);	
};

function start(){
	$('#top').fadeOut(1000);
	$('#test').fadeIn(2000);
};

function playMovie(){
	$('#slides1').superslides('animate', 2);
	$('#movie').attr("src","https://www.youtube.com/embed/VEYTKrukg78?autoplay=1&controls=0&rel=0&showinfo=0&color=white");
	
};

$(function() {
	$('#slides1').superslides({
		hashchange: false,
		animation_speed: 400,
	});
	
	mySwiper = $('.swiper-container').swiper({
	//Your options here:
	mode:'vertical',
	loop: false,
	freeMode:true,
	freeModeFluid:true,
	grabCursor:true,
	//scrollContainer:true,
	//createPagination: true,
	//pagination:'.pagination',
	//paginationClickable:true
	//etc..
	});
	
	
	
});