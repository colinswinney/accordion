<?php
/**
 * Plugin Name:       Accordion
 * Description:       "An accordion item block",
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Colin Swinney
 * Text Domain:       cjsb-accordion
 */

/**
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
add_action( 'init', function() {
	register_block_type( __DIR__ . '/build' );
} );

/**
 * Enqueue script to handle front end functions
 */
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script( 'cjsb-accordion', plugins_url( basename( __DIR__ ) . '/src/frontend.js' ), array(), '1.0.0', true );
} );
