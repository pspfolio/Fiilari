(function() {
	'use strict';
	
	angular
		.module('app.user')
		.controller('UserController', UserController);
	
	UserController.$inject = ['$firebaseArray', 'userService', 'company'];
	
	function UserController($firebaseArray, userService, company) {
		var vm = this;
		console.log('company', company);
		var fireUsers = new Firebase('https://fiilarit.firebaseio.com/users');
		
		vm.user = new userService.User();
		vm.users = userService.getUserByCompany(company.uid);
		vm.addUser = addUser;
		vm.removeUser = removeUser;
		
		function addUser(user) {
			console.log(vm.users);
			vm.users.$add(user);
			vm.user = new userService.User();
		}
		
		function removeUser(user) {
			vm.users.$remove(user);
		}
	}
}());