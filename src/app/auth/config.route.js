(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.config(config);
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider) {
		console.log('register');
		$routeProvider.when('/register', {
			templateUrl: 'app/auth/register.html'
		});
	}
	
}());