(function() {
	'use strict';
	
	angular
		.module('app.user')
		.controller('UserController', UserController);
	
	UserController.$inject = ['$firebaseArray'];
	
	function UserController($firebaseArray) {
		var vm = this;
		
		var fireUsers = new Firebase('https://fiilarit.firebaseio.com/users');
		
		function User() {
			this.id = null;
			this.name = '';
		}
		
		vm.user = new User();
		vm.users = $firebaseArray(fireUsers);
		vm.addUser = addUser;
		
		function addUser(user) {
			vm.users.$add(user);
			vm.user = new User();
		}
	}
}());