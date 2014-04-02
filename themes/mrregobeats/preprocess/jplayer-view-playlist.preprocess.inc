<?php 
function mrregobeats_preprocess_jplayer(&$vars) {
  $node = $vars['result']['node'];
  if ($node->nid) { // if the result is a node we can load the teaser
    $vars['teaser'] = node_view($node, 'teaser'); 
  }
 }
 ?>