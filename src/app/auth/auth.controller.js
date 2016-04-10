(function (){
	'use strict';
	
	angular
		.module('app.auth')
		.controller('AuthController', AuthController);
	
	AuthController.$inject = ['$firebaseAuth'];
	
	function AuthController($firebaseAuth) {
		var vm = this;
		var firebaseReference = new Firebase('https://fiilarit.firebaseio.com/');
		var firebaseAuthObject = $firebaseAuth(firebaseReference);
		
		vm.company = {
			name: '',
			email: '',
			password: ''
		};
		
		vm.register = register;
		
		function register(company) {
			console.log(company);
			firebaseAuthObject.$createUser(company);
		}
	}
	
}());