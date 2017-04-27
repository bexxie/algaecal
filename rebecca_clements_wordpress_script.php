function modify_jquery() {
	if (!is_admin()) {
		wp_deregister_script('jquery');
		wp_register_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js', false, '1.8.1');
		wp_enqueue_script('jquery');
	}
}
add_action('init', 'modify_jquery');
