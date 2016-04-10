(function() {
	'use strict';
	
	angular
		.module('app.layout')
		.directive('psNavbar', psNavBar);
	
	function psNavBar() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'app/layout/navbar.html',
			controller: NavbarController,
			controllerAs: 'vm'
		};
	}
	
	NavbarController.$inject = ['$location', 'authService'];
	
	function NavbarController($location, authService) {
		var vm = this;
		
		vm.isLoggedIn = authService.isLoggedIn;
		vm.logout = logout;
		
		function logout() {
			authService.logout();
			$location.path('/');
		}
	}
	
}());