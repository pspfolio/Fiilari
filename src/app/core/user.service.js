(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('userService', UserService);
	
	UserService.$inject = ['$firebaseArray'];
	
	function UserService($firebaseArray) {
		
		var users = null;
		
		var service = {
			User: User,
			getUserByCompany: getUsersByCompany,
			reset: reset
		};
		
		return service;
		
		function User() {
			this.id = null;
			this.name = '';
		}
		
		//var fireUsers = new Firebase('https://fiilarit.firebaseio.com/users');
		function getUsersByCompany(companyId) {
			if(!users) {
				users = $firebaseArray(new Firebase('https://fiilarit.firebaseio.com/users').child(companyId).child('users'));
			}
			
			return users;
		}
		
		function reset() {
			users.$destroy();
			users = null;
		}
	}
}());