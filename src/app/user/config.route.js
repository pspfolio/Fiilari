(function() {
	'use strict';
	
	angular
		.module('app.user')
		.config(config);
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider) {
		$routeProvider.when('/userlist', {
			templateUrl: 'app/user/userList.html',
			controller: 'UserController',
			controllerAs: 'vm',
			resolve: {company: resolveCompany}
		});
	}
	
	resolveCompany.$inject = ['authService'];
	
	function resolveCompany(authService) {
		return authService.firebaseAuthObject.$requireAuth();
	}
	
}());