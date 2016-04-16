(function() {
	'use strict';
	
	angular
		.module('app.user')
		.directive('psUserForm', psUserForm);
	
	function psUserForm() {
		return {
			restrict: 'E',
			templateUrl: 'app/user/directives/userForm.html',
			controller: psUserFormCtrl,
			controllerAs: 'vm',
			scope: {
				users: '='
			},
			bindToController: true
		};
		
		psUserFormCtrl.$inject = ['userService'];
		
		function psUserFormCtrl(userService) {
			var vm = this;
			
			vm.user = new userService.User();
			vm.addUser = addUser;
			
			function addUser(user) {
				vm.users.$add(user);
				vm.user = new userService.User();
			}
		}
	}
}());