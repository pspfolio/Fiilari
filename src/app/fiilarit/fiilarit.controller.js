(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.controller('FiilaritController', FiilaritController);
	
	FiilaritController.$inject = ['userService', 'fiilaritService', 'company'];
	
	function FiilaritController(userService, fiilaritService, company) {
		var vm = this;
		vm.selectedUser = null;
		vm.verifySuccess = null;
		vm.users = userService.getUserByCompany(company.uid);
		vm.ratings = fiilaritService.getFiilariRatings();
		vm.addFiilis = addFiilis;
		vm.verifyUser = verifyUser;
		vm.registerFiilari = registerFiilari;
		
		function addFiilis(user) {
			reset();
			vm.selectedUser = user;
		}
		
		function verifyUser(inputUserId) {
			vm.verifySuccess = vm.selectedUser.id === inputUserId;
		}
		
		function registerFiilari(rate) {
			// fiilari property not found, add property with empty array
			if(!vm.selectedUser.fiilari) {
				vm.selectedUser.fiilari = [];
			}
			vm.selectedUser.fiilari.push(rate);
			vm.users.$save(vm.selectedUser);
			reset();
		}
		
		function reset() {
			vm.selectedUser = null;
			vm.verifySuccess = null;
		}
	}
	
}());