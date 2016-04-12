(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.controller('FiilaritController', FiilaritController);
	
	FiilaritController.$inject = ['userService', 'company'];
	function FiilaritController(userService, company) {
		var vm = this;
		vm.selectedUser = null;
		vm.users = userService.getUserByCompany(company.uid);
		vm.addFiilis = addFiilis;
		vm.verifyUser = verifyUser;
		vm.verifySuccess = null;
		
		function addFiilis(user) {
			console.log(user);
			vm.selectedUser = user;
		}
		
		function verifyUser(inputUserId) {
			vm.verifySuccess = vm.selectedUser.id === inputUserId;
		}
	}
	
}());