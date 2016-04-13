(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.config(config);
	
	config.$inject =['$routeProvider'];
	
	function config($routeProvider) {
		$routeProvider.when('/fiilarit', {
			templateUrl: 'app/fiilarit/fiilarit.html',
			controller: 'FiilaritController',
			controllerAs: 'vm',
			resolve: {company: resolveCompany}
		});
	}
	
	resolveCompany.$inject = ['authService'];
	
	function resolveCompany(authService) {
		return authService.firebaseAuthObject.$requireAuth();
	}

}());