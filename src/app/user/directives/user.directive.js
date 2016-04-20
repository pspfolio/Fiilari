(function() {
	'use strict';
	
	angular
		.module('app.user')
		.directive('psUser', psUser);
	
	function psUser() {
		return {
			restrict: 'E',
			templateUrl: 'app/user/directives/user.html',
			scope: {
				companyId: '='
			},
			controller: psUserController,
			controllerAs: 'vm',
			bindToController: true
		};
		
		psUserController.$inject = ['$routeParams', 'userService'];
		
		function psUserController($routeParams, userService) {
			var vm = this;
			vm.countOverallFiilari = countOverallFiilari;
			vm.fiilarit = userService.getFiilaritByUserId(vm.companyId, $routeParams.userId);
			vm.user = userService.getUserById(vm.companyId, $routeParams.userId);
			
			function countOverallFiilari() {
				var result = 0;
				angular.forEach(vm.fiilarit, function(value) {
					result += value.rate;
				});
				return result;
			}
		}
	}
	
}());