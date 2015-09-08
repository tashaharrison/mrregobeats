<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * mrregobeats theme.
 */


/**
 * Implementation of hook_theme().
 */
 
drupal_add_js (drupal_get_path('theme','mrregobeats') .'/js/script.js');
drupal_add_js (drupal_get_path('theme','mrregobeats') .'/js/waypoints.min.js');
drupal_add_js (drupal_get_path('theme','mrregobeats') .'/js/bxslider/dist/jquery.bxslider.min.js');
drupal_add_js (drupal_get_path('theme','mrregobeats') .'/js/jquery.fitvids.min.js');
drupal_add_js (drupal_get_path('theme','mrregobeats') .'/js/f.js');

 
include_once(drupal_get_path('module', 'jplayer') .'/includes/jplayer.theme.inc');

function jplayer_mrregobeats() {
  return array(
    'jplayer_formatter_jplayer_single' => array( // <-- the array key, translated to Drupal tpl is jplayer-formatter-jplayer-single.tpl.php
      'arguments' => array('element' => NULL),
      'template' => 'theme/jplayer',
      'file' => 'includes/jplayer.theme.inc',
    ),
    'jplayer_formatter_jplayer_playlist' => array( // <-- ditto for playlist
      'arguments' => array('element' => NULL),
      'template' => 'theme/jplayer',
      'file' => 'includes/jplayer.theme.inc',
    ),
    'jplayer_view_playlist' => array( // <-- ditto for views player
      'arguments' => array('view' => NULL, 'items' => NULL),
      'template' => 'mrregobeats/templates',
      'file' => 'includes/jplayer.theme.inc',
    ),
  );
}
?>