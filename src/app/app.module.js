(function() {
	'use strict';
	
	angular.module('app', [
		// Angular modules.
		'ngRoute',
    
		// Third-party modules
		'firebase',
		
		// Custom modules
		'app.auth',
		'app.core',
		'app.fiilarit',
		'app.landing',
		'app.layout',
		'app.user'
	]);
}());