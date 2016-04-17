(function() {
	'use strict';
	
	angular
		.module('app.user')
		.directive('psUserTable', psUserTable);
	
	function psUserTable() {
		return {
			restrict: 'E',
			templateUrl: 'app/user/directives/userTable.html',
			controller: userTableCtrl,
			controllerAs: 'vm',
			scope: {
				users: '='
			},
			bindToController: true
		};
	}
	
	function userTableCtrl() {
		var vm = this;
		
		vm.removeUser = removeUser;
		console.log(vm.users);
		
		function removeUser(user) {
			vm.users.$remove(user);
		}
	}
	
}());