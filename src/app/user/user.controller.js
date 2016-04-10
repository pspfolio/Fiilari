(function() {
	'use strict';
	
	angular
		.module('app.user')
		.controller('UserController', UserController);
	
	function UserController() {
		var vm = this;
		vm.text = "plaa";
	}
}());