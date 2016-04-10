(function (){
	'use strict';
	
	angular
		.module('app.auth')
		.controller('AuthController', AuthController);
	
	AuthController.$inject = ['$location','$firebaseAuth', 'authService'];
	
	function AuthController($location, $firebaseAuth, authService) {
		var vm = this;
		
		vm.company = {
			name: '',
			email: '',
			password: ''
		};
		
		vm.register = register;
		vm.login = login;
		
		function register(company) {
			return authService.register(company)
				.then(function() {
					vm.login(company);
				}).catch(function (error) {
					console.log(error);
				});
		}
		
		function login(company) {
			return authService.login(company)
				.then(function() {
					$location.path('/userlist');
				}).catch(function (error) {
					console.log(error);
				});
		}

	}
	
}());