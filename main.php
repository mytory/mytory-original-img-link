<?php
/*
Plugin Name: Mytory Original Image Link
Description: Add original image link to img tag reduced on client.
Author: mytory
Version: 1.0
Author URI: http://mytory.net
*/

function aoil_script(){
	wp_enqueue_script( 'add-original-image-link', plugin_dir_url(__FILE__) . get_bloginfo('language') . '.js', array('jquery'), '1.0', 1 );
}

add_action('wp_enqueue_scripts', 'aoil_script');