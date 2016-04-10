(function() {
	'use strict';
	
	angular
		.module('app.landing')
		.config(config);
	
	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		console.log('landing');
		$routeProvider.when('/', {
			templateUrl: 'app/landing/landing.html'
		});
	}
}());