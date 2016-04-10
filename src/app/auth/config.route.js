(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.config(config);
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'app/auth/register.html',
			controller: 'AuthController',
			controllerAs: 'vm'
		})
		.when('/login', {
			templateUrl: 'app/auth/login.html',
			controller: 'AuthController',
			controllerAs: 'vm'
		});
	}
	
}());