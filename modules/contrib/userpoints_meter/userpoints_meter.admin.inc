<?php

/**
 * Admin settings form
 */


function userpoints_meter_admin_settings_form() {

  $form = array();

  $numbers = drupal_map_assoc(array(1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10));

  $form['userpoints_meter_numer_blocks'] = array(
    '#title' => t('Numer of Blocks'),
    '#type' => 'select',
    '#description' => t('You could have multiple userpoint catagories, and may eventually create a meter block for each.'),
    '#default_value' => variable_get('userpoints_meter_numer_blocks', 1),
    '#options' => $numbers,
  );

  return system_settings_form($form);
}
