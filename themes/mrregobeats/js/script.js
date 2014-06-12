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
