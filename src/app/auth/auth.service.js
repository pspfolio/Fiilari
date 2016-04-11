(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.factory('authService', authService);
	
	authService.$inject = ['$firebaseAuth', 'userService'];
	
	function authService($firebaseAuth, userService) {
		var firebaseAuthObject = $firebaseAuth(new Firebase('https://fiilarit.firebaseio.com/'));
		var service = {
			firebaseAuthObject: firebaseAuthObject,
			register: register,
			login: login,
			logout: logout,
			isLoggedIn: isLoggedIn
		};
		
		return service;
		
		function register(company) {
			return firebaseAuthObject.$createUser(company);
		}
		
		function login(company) {
			return firebaseAuthObject.$authWithPassword(company);
		}
		
		function isLoggedIn() {
			return firebaseAuthObject.$getAuth();
		}
		
		function logout() {
			firebaseAuthObject.$unauth();
			userService.reset();
		}
	}
	
}());