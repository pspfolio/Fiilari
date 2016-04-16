(function() {
	'use strict';
	
	angular
		.module('app.user')
		.controller('UserController', UserController);
	
	UserController.$inject = ['userService', 'company'];
	
	function UserController(userService, company) {
		var vm = this;
		vm.users = userService.getUserByCompany(company.uid);
	}
}());