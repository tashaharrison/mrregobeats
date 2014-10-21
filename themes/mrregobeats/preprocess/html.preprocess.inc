<?php
function mrregobeats_PREPROCESS_HTML(&$variables) {
	$path = drupal_get_path('theme', 'mrregobeats');
		$options = array('group' => JS_LIBRARY);

		// Matchmedia library.
		drupal_add_js($path . '/libraries/matchMedia/matchMedia.js', $options);
		drupal_add_js($path . '/libraries/matchMedia/matchMedia.addListener.js', $options);

		drupal_add_js(drupal_get_path('theme', 'omega') . '/js/omega.mediaqueries.min.js', $options);

		drupal_add_js(array('omega' => array('mediaQueries' => array(
			'mobSmall' => 'all and (min-width: 22em)',
			'mobLarge' => 'all and (min-width: 28em)',
			'tab' => 'all and (min-width: 44em)',
			'desk' => 'all and (min-width: 70em)',
		))), 'setting');


}
?>