<?php
function hedgecomm_alpha_preprocess_page(&$vars) {

	// unset page title on front page
	if (drupal_is_front_page()) {
		$vars['title'] = array();
	} 

}