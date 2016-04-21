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
				companyId: '=',
				userId: '='
			},
			controller: psUserController,
			controllerAs: 'vm',
			bindToController: true
		};
		
		psUserController.$inject = ['userService'];
		
		function psUserController(userService) {
			var vm = this;
			vm.user = userService.getUserById(vm.companyId, vm.userId);
		}
	}
	
}());