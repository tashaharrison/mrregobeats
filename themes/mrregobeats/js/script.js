(function ($) {

Drupal.behaviors.stickyMenu = {
	attach: function() {
		$(document).ready(function(){
			var sticky_container = $('#block-views-kpi-block-block');

			sticky_container.waypoint(function(direction) {
				sticky_container.toggleClass("sticky",direction==='down');
			});
		});
	}
};


Drupal.behaviors.commerce_add_to_cart_confirmation_overlay = {
attach:function (context, settings) {
  if ($('.messages--commerce-add-to-cart-confirmation').length > 0) {
	// Add the background overlay.
	$('body').append("<div class=\"commerce_add_to_cart_confirmation_overlay\"></div>");

	// Enable the close link.
	$('.commerce-add-to-cart-confirmation-close').live('click touchend', function(e) {
	  e.preventDefault();
	  $('.messages--commerce-add-to-cart-confirmation').remove();
	  $('.commerce_add_to_cart_confirmation_overlay').remove();
	});
  }
}
};

Drupal.behaviors.buybuttonHome = {
	attach: function(context, settings) {
		
		// Add classes for matching later
		$('.jp-playlist').children('ul').addClass('jp-playlist-wrapper');
		$('.jp-playlist-wrapper').children('li').each(function (i) {
			i = i+1;
			$(this).addClass('views-row-' + i);
			$(this).addClass('jp-item');
			$(this).children('a').addClass('jp-link');
		});
		
		// Variables for matching
		
		//Insert the button into the playlist
		$('.views-row-1.buy-button').insertAfter('.views-row-1.jp-item .jp-link');
		$('.views-row-2.buy-button').insertAfter('.views-row-2.jp-item .jp-link');
		$('.views-row-3.buy-button').insertAfter('.views-row-3.jp-item .jp-link');
		$('.views-row-4.buy-button').insertAfter('.views-row-4.jp-item .jp-link');
		$('.views-row-5.buy-button').insertAfter('.views-row-5.jp-item .jp-link');
		
		
	}
};
  
  
})(jQuery);
;
