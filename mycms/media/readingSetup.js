
$('#reference').on('scroll', function () {
    $('#article').scrollTop($(this).scrollTop());
});


//position bg and border
var border_width = 10;
var window_width = $(window).width();
var whiteWidth = $("#whiteBorder").width();
var white_left = (window_width - whiteWidth) / 2;
$("#whiteBorder").css("left", white_left);
var borderPos = $('#whiteBorder').position();

//position amplify
$('#amplifyHeading').css("top", '60px');
var ampInnovWidth = $('#amplifyHeading').outerWidth() + $('#innovations').width();
$('#amplifyHeading').css("left", white_left);





//position article and abstract title
$('#articleTitle').css("top", borderPos.top + border_width);
$('#abstract').css('top', borderPos.top + border_width);
$('#abstractTitle').css("top", borderPos.top + border_width);
$('#abstractTitle').css("left", borderPos.left+border_width);
$('#abstractTitle').css("height", $('#articleTitle').outerHeight());
$('#articleTitle').css('left', $('#abstractTitle').position().left + $('#abstractTitle').outerWidth() + 35);//35=article padding-left);
$('#articleTitle').width($('#whiteBorder').width()-($('#articleTitle').position().left - borderPos.left) -100);//articleTitle padding = 25+75


//position innovations left based on article title
$('#innovations').css('left', $('#articleTitle').position().left + 35); //padding-left of article

//position issueLinks
$('#allIssueLinks').css('top', $('#innovations').position().top + $('#innovations').height());
//$('#issue1').css('top', $('#innovations').position().top + $('#innovations').height());
//$('#issue1').css('left', $('#innovations').position().left);


//position abstract and article
$('#abstractRest').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight());
$('#abstractRest').css("left", $('#abstractTitle').position().left);

//position outline  (at setup abstract is expanded)
positionOutline(true);

//position article beneath abstracTitle (so that it doesn't matter
//whether abstract is expanded or not
$('#article').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight()); 
$('#article').css("left", $('#articleTitle').position().left);

$('#article').height($('#whiteBorder').height()-($('#article').position().top - borderPos.top) - border_width- 20); //20=padding top + bottom for article

//position reference col next to article
$("#reference").css("top", $('#article').position().top);
$('#reference').css("left", $('#article').position().left + $('#article').outerWidth());
$('#reference').css("height", $('#article').height());
var refWidth = $('#whiteBorder').width() - ($('#reference').position().left-borderPos.left) - border_width - 60; //60 = padding for left and right
$('#reference').width(refWidth);

//set outline height (with abstract open)
$('#outline').height($('#article').height()-($('#abstractRest').outerHeight()));





//setup outline, initialize w/ padding.
var outlineHeight = 0;
$('.outlineBox').each(function(i, el) {
	var size = $(el).outerHeight();
	outlineHeight += size;
});

$('#outline').css("overflow", "hidden");
if (outlineHeight + (2 * (border_width)) >= $('#whiteBorder').height()) {
	//collapse all rest texts and only display title.
	$('#outline').children().each(function(index){
		collapseOutlineBox($(this));
	});

}

//create white space in smaller div (art or ref), so that scrollHeight is "equal"
var totalArtHeight = document.getElementById("article").scrollHeight;
var totalRefHeight = document.getElementById("reference").scrollHeight;
if (totalArtHeight > totalRefHeight){
    document.getElementById("refWhiteSpace").style.height = 
	(totalArtHeight - totalRefHeight) + 'px';
}

else if (totalRefHeight < totalArtHeight){
    console.log(" ERROR? I think the Artical is shorter than the reference column.");
    document.getElementById("artWhiteSpace").style.height = 
	(totalRefHeight - totalArtHeight) + 'px';
}



//align reference column footnotes with where they appear in article text
//this shit is broken right now because django doesn't play nice w/
//html5 and custom data attributes are an html5 thing
/*
$('[data-foot="article"]').each(
    function(index){
    console.log("reference spacing script running");
	var curr_data_ref = $('[data-foot="ref"]').eq(index);
	art_offset_top = $(this).offset().top;
	ref_left_offset = curr_data_ref.offset().left;
	ref_left_offset = curr_data_ref.offset().left;
	curr_data_ref.offset({top:art_offset_top, left:ref_left_offset});
});
*/

$('.references').each(function(i){
    console.log(i);
    console.log('current ref');
    console.log($(this).text());
    var refLeft = $(this).offset().left;
    if (i==0){
        //line up with author heading
        footTop = $('.author-heading').offset().top //should only be one
    }

    else{
        var footMatch = $($('.footNumber')[i-1]);
        console.log('footMatch');
        console.log(footMatch);
        console.log(footMatch.text());
        var footOffset = (footMatch).offset();
        console.log('footOffset');
        console.log(footOffset);
        console.log('footOFfsetTop');
        var footTop = (footMatch).offset().top;
        console.log(footTop);
    //    var supMatch = $($('sup')[i]);
      //  var supOffset = $(supMatch).offset();
    //    console.log('supOffset');
    //    console.log(supOffset);
    //    var supTop = supOffset.top
    }
    console.log('setting offset');
    $(this).offset({top:footTop, left:refLeft});
});

function collapseOutlineBox(outlineBox){
	var heading = $(outlineBox).children()[0];
	var restText = $(outlineBox).children()[1];
//	restText.css.addClass("clear");
//	heading.css('border-bottom', none);
//	restText.css('border-bottom', '2px dotted grey');
}

function expandOutlineBox(outlineBox){
	var heading = $(outlineBox).children()[0];
	var restText = $(outlineBox).children()[1];
	restText.removeClass("clear");
	restText.css("border-bottom", none);
	heading.css('border-bottom',  '1px solid grey');
}

function positionOutline(abstractOpen){
    if (abstractOpen){
        $('#outline').css("top", $('#abstractRest').position().top + $('#abstractRest').outerHeight());
        $('#outline').css('left', $('#abstractRest').position().left);
        return;
    }
    else{
        $('#outline').css("top", $('#abstractTitle').position().top + $('#abstractTitle').outerHeight());
        $('#outline').css('left', $('#abstractTitle').position().left);
    }
}
