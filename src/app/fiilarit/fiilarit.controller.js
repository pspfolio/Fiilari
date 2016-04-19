(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.controller('FiilaritController', FiilaritController);
	
	FiilaritController.$inject = ['userService', 'company'];
	
	function FiilaritController(userService, company) {
		var vm = this;
		vm.users = userService.getUsersByCompany(company.uid);
		vm.selectUser = selectUser;
		
		function selectUser(user) {
			reset();
			vm.selectedUser = user;
		}
				
		function reset() {
			vm.selectedUser = null;
			vm.verifySuccess = null;
		}
	}
	
}());