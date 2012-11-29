var ANIMATION_LENGTH = 700;

$(document).ready(function(){
	$panel = $('#main_content');
	$trigger =$('.trigger');
	$slickbox = $('#issue-list');
	$toplist = $('#issues-toc');
	$blogBox = $('#blog-list');
	$home=$('#home');
	$about=$('.about_trigger');
	$aboutpage=$('#about');
	$homeTrigger=$('.homeTrigger');

	$about.click(function() {
		$home.fadeOut('slow',function(){
			$aboutpage.fadeIn();
		});
	});
	
	$homeTrigger.click(function() {
		$aboutpage.fadeOut('slow',function(){
			$home.fadeIn();
		});
	});

	$trigger.click(function(e){
		var isLeft = $panel.css('left')==="20px";
		var newLeft = (isLeft) ? "18%" : "20px";
		var delayAmount = 700;
		var idClicked = e.target.id;
		var myClass = $(this).attr("class");
		

		if (newLeft==="18%") {
			if (idClicked==="main"||idClicked==="browse-issues"||myClass===("homeTrigger trigger")&&$blogBox.css("display")!=="block") {
				$toplist.fadeOut('slow');
				$slickbox.hide('slow');
			} else if (idClicked==="main2"||idClicked==="browse-blog"||myClass===("homeTrigger trigger")&&$slickbox.css('display')!=='block') {
				$blogBox.hide('slow');
			} else if ($slickbox.css('display')==='block'&&idClicked==="browse-blog") {
					$slickbox.hide('slow');
					$blogBox.show('slow');
					return false;
			} else if ($blogBox.css('display')==='block'&&idClicked==="browse-issues") {
				$blogBox.hide('slow');
				$slickbox.show('slow');
				$toplist.fadeIn('slow');
				return false;
			} 
		} else if (newLeft==="20px"){
			if (idClicked==="browse-issues") {
				$slickbox.show('slow');
				$toplist.fadeIn('slow');
			} else if (idClicked==="browse-blog") {
				$blogBox.show('slow');
			} else if (myClass===("homeTrigger trigger")&&$blogBox.css('display')!=='block'&&$slickbox.css('display')!=='block') {
				console.log(myClass);	
				return false;
			}
		}
		
		$panel.animate({'left': newLeft},ANIMATION_LENGTH);

	});
});