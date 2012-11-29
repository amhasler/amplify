$(document).ready(function(){
	$contactButton=$('.contact_trigger');
	$contactPage=$('#contact');
	$submit=$('#submit');
	$confirmation=$('#confirmation');
	$contactText=$('#contact-text');

	$contactButton.click(function() {
		$contactPage.lightbox_me();
	});
	
	$submit.click(function() {
		$contactText.trigger('close');
	});
});

