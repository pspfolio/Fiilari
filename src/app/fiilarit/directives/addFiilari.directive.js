(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.directive('psAddFiilari', psAddFiilari);
	
	function psAddFiilari() {
		return {
			restrict: 'E',
			templateUrl: 'app/fiilarit/directives/addFiilari.html',
			controller: addFiilariCtrl,
			controllerAs: 'vm',
			scope: {
				selectedUser: '=',
				users: '='
			},
			bindToController: true
		};
		
		addFiilariCtrl.$inject = ['$timeout', 'fiilaritService'];
		
		function addFiilariCtrl($timeout, fiilaritService) {
			var vm = this;
			vm.ratings = fiilaritService.getFiilariRatings();
			vm.verifyUser = verifyUser;
			vm.registerFiilari = registerFiilari;
			vm.showUserMessage = false;
			
			function verifyUser(userId) {
				vm.verifySuccess = vm.selectedUser.id === userId;
			}
			
			function registerFiilari(rate) {
				if(!vm.selectedUser.fiilari) {
					vm.selectedUser.fiilari = [];
				}
				var fiilari = {rate: rate, datetime: moment().format()};
				vm.selectedUser.fiilari.push(fiilari);
				vm.users.$save(vm.selectedUser);
				vm.showUserMessage = true;
				reset();
				$timeout(function() {
					vm.showUserMessage = false;
				}, 2000);
			}
			
			function reset() {
				vm.selectedUser = null;
				vm.verifySuccess = null;
			}
		}
	}
}());