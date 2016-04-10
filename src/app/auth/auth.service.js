(function() {
	'use strict';
	
	angular
		.module('app.auth')
		.factory('authService', authService);
	
	authService.$inject = ['$firebaseAuth'];
	
	function authService($firebaseAuth) {
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
			console.log(company);
			return firebaseAuthObject.$authWithPassword(company);
		}
		
		function isLoggedIn() {
			return firebaseAuthObject.$getAuth();
		}
		
		function logout() {
			firebaseAuthObject.$unauth();
		}
	}
	
}());