(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('userService', UserService);
	
	UserService.$inject = ['$firebaseArray', '$firebaseObject', 'firebaseDataService'];
	
	function UserService($firebaseArray, $firebaseObject, firebaseDataService) {
		
		var users = null;
		
		var service = {
			User: User,
			getUsersByCompany: getUsersByCompany,
			reset: reset,
			getUserById: getUserById,
			getFiilaritByUserId: getFiilaritByUserId
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
		
		function getUserById(companyId, userId) {
			return $firebaseObject(firebaseDataService.companies.child(companyId).child('users').child(userId));
		}
		
		function getFiilaritByUserId(companyId, userId) {
			return $firebaseArray(firebaseDataService.companies
								.child(companyId)
								.child('users')
								.child(userId)
								.child('fiilari'));
		}
				
		function reset() {
			users.$destroy();
			users = null;
		}
	}
}());