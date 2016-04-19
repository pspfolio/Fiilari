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
			vm.user = userService.getUserById(vm.companyId, $routeParams.userId);
			vm.countOverallFiilari = countOverallFiilari;
			
			function countOverallFiilari() {
				var result = 0;
				angular.forEach(vm.user.fiilari, function(value) {
					result += value.rate;
				});
				return result;
			}
		}
	}
	
}());