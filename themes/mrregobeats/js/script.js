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

})(jQuery);

(function ($) {
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
  }
})(jQuery);
;
