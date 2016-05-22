function redirect() {
	window.location = 'http://cryizellyfish.pancakeapps.com/bellyfish/authorizedviewingonly.html'
}

function authorize(){
	name = $('#answer').val();
	if ((name.toLowerCase()=='mako')||(name.toLowerCase()=='makomori')||(name.toLowerCase()=='mako mori')){
		setTimeout('redirect()', 1000);
		alert('Authorized! Click OK to continue');
	}
	else{
		alert('you impostor!');
	}
		
};

function playMovie(){
	$('#slides1').superslides('animate', 2);
};

$(function() {
	$('#slides1').superslides({
		hashchange: false,
		animation_speed: 400,
	});	
});