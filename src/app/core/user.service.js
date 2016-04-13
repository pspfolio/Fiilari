(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('userService', UserService);
	
	UserService.$inject = ['$firebaseArray', 'firebaseDataService'];
	
	function UserService($firebaseArray, firebaseDataService) {
		
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
			this.fiilari = [];
		}
		
		function getUsersByCompany(companyId) {
			if(!users) {
				users = $firebaseArray(firebaseDataService.companies.child(companyId).child('users'));
			}
			
			return users;
		}
		
		function reset() {
			users.$destroy();
			users = null;
		}
	}
}());