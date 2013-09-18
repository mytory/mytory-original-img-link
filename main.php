<?php
/*
Plugin Name: Mytory Original Image Link
Description: Add original image link to img tag reduced on client.
Author: mytory
Version: 1.0
Author URI: http://mytory.net
*/

function aoil_script(){
    $lang = 'en';
    if(get_bloginfo('language') == 'ko-KR'){
        $lang = 'ko-KR';
    }
	wp_enqueue_script( 'add-original-image-link', plugin_dir_url(__FILE__) . $lang . '.js', array('jquery'), '1.0', 1 );
}

add_action('wp_enqueue_scripts', 'aoil_script');