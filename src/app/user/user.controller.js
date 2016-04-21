(function() {
	'use strict';
	
	angular
		.module('app.user')
		.controller('UserController', UserController);
	
	UserController.$inject = ['$routeParams','userService', 'company'];
	
	function UserController($routeParams, userService, company) {
		var vm = this;
		vm.company = company;
		vm.userId = $routeParams.userId;
		vm.users = userService.getUsersByCompany(company.uid);
	}
}());