/* Custom JS Created by AMP Think for Parent Theme */

(function($) {
	$(function() {

    function getChromeVersion () {
        var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);

        return raw ? parseInt(raw[2], 10) : false;
    }

    var chromeVersion = getChromeVersion();
    console.log('Chrome Version? - ' + chromeVersion );

    if (chromeVersion.toString() == '45') {
      $('body').addClass('chrome-45');
    }
		// else {

	    // var $el = $("#menu-container");
	    var elHeight = 1080;
	    var elWidth = 1920;

	    var windowHeight = $(window).height(); // New height
	    var windowWidth = $(window).width(); // New width

	    console.log('window - ' + windowWidth + ',' + windowHeight);

	    var scale, originX, originY;

	    scale = Math.min(
	      windowWidth / elWidth,
	      windowHeight / elHeight
	    );

	    if(windowWidth > elWidth) {
	      originX = elWidth - windowWidth;
	    } else {
	      originX = windowWidth - elWidth;
	    }
	    if(windowHeight > elHeight) {
	      originY = elHeight - windowHeight;
	    } else {
	      originY = windowHeight - elHeight;
	    }

	    console.log('scale - ' + scale);
	    console.log('origins - ' + (originX*3/4) + ',' + (originY*3/4));

	    $("#menu-container").css('transform', "scale(" + scale + ")" + " translate(" + originX*3/4 + "px, " + originY*3/4 + "px)");
		// }

		//
		// $(document).ready(function(){
    //     $("#logo").click(function(){
		// 			console.log('trying to reload');
    //       location.reload(true);
    //     });
    // });

		// var menuContainer = $('.menu-container');
		// console.log('menucontainer - ' + menuContainer.height());

		$('.menu-list').each(function() {
			listheight = $(this).innerHeight();
			listpadding_top = $(this).css('padding-top');
			listpadding_bot = $(this).css('padding-bottom');
			console.log('list height - ' + listheight);
			console.log("padding - " + listpadding_bot + ", " + listpadding_top);
			var max_innerheight = listheight - parseFloat(listpadding_bot) - parseFloat(listpadding_top);
			console.log('maxheight - ' + max_innerheight);

			var current_innerheight = 0;
			$(this).children('.menu-section').each(function() {
				var sectionheight = $(this).innerHeight();
				console.log('section height - ' + sectionheight);
				current_innerheight += sectionheight;
			});

			var currentFontstring = $(this).css('font-size');
			var currentFont = currentFontstring.split('px')[0];

			console.log('check - ' + (current_innerheight > listheight));

			while (current_innerheight > max_innerheight) {

				console.log('current - ' + currentFont);
				var currentFont_ratio = current_innerheight / parseFloat(currentFont);

				var newFont = currentFont - 1;
				console.log('newfont - ' + newFont);

				var potentialFont = max_innerheight / currentFont_ratio;
				console.log('potential font - ' + potentialFont);

				if (potentialFont <= currentFont ) {
					newFont = potentialFont;
				}
				var newFontString = newFont + 'px';
				$(this).css('font-size', newFontString);
				// console.log($(this).css('font-size'));

				current_innerheight = 0;
				$(this).children('.menu-section').each(function() {
					var sectionheight = $(this).height()
					current_innerheight += sectionheight;
				});
				currentFont = newFont;

				console.log('check - ' + (current_innerheight > max_innerheight));
			}
		});


		// var windowPerc = windowHeight * .89;
		//
		// var menuHeight = $('.portable-menu-container .menu-list').height();
		// console.log(menuHeight);
		//
		// var currentFontstring = $('.portable-menu-container .menu-list ul li.menu_item').css('font-size');
		// var currentFont = currentFontstring.split('px')[0];
		//
		// console.log('check - ' + (menuHeight > windowPerc));
		//
		// while (menuHeight > windowPerc) {
		//
		// 	var newFont = currentFont - 0.3;
		// 	console.log('newfont - ' + currentFont);
		//
		// 	var newFontString = newFont + 'px';
		// 	$('.portable-menu-container .menu-list ul li.menu_item').css('font-size', newFontString);
		//
		// 	menuHeight = $('.portable-menu-container .menu-list').height();
		// 	currentFont = newFont;
		// }

	});
})(jQuery);
