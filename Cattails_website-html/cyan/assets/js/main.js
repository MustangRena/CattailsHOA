/*
	Concentric by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:       [ '1281px',  '1680px' ],
			normal:     [ '1081px',  '1280px' ],
			narrow:     [ '961px',   '1080px' ],
			narrower:   [ '737px',   '960px'  ],
			mobile:     [ null,      '736px'  ]
		});

	// Google maps.
document.addEventListener("DOMContentLoaded", function(){
    const latitude = 34.9905110847776
    const longitude = 85.1044105071409
    const directionsLink = 'https://www.google.com/maps/dir/?api=1&destination=$34.9905110847776",$-85.1044105071409';

    const directionsIcon = document.getElementById('direction-icon');
    if (directionsIcon) {
        directionsIcon.href = directionsLink;
    } else {
        console.error("Element with ID 'directions-icon' not found.");
    }
})
    
        // Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -14,
			noOpenerFade: true
		});

	// Nav Panel.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
