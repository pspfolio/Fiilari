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
	
	NavbarController.$inject = ['$location', 'authService', 'companyService'];
	
	function NavbarController($location, authService, companyService) {
		var vm = this;
		
		vm.isLoggedIn = authService.isLoggedIn;
		vm.logout = logout;
		vm.getCompany = getCompany;
		vm.company = undefined;
				
		function getCompany() {
			var user = vm.isLoggedIn();
			if(user && !vm.company) {
				companyService.getCompany(user.uid).then(function(company) {
					vm.company = company;
				});
			}
			return vm.company;
		}
		
		function logout() {
			vm.company = undefined;
			authService.logout();
			$location.path('/');
		}
	}
	
}());