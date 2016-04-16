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
		
		addFiilariCtrl.$inject = ['fiilaritService'];
		function addFiilariCtrl(fiilaritService) {
			var vm = this;
			vm.ratings = fiilaritService.getFiilariRatings();
			vm.verifyUser = verifyUser;
			vm.registerFiilari = registerFiilari;
			
			function verifyUser(userId) {
				vm.verifySuccess = vm.selectedUser.id === userId;
			}
			
			function registerFiilari(rate) {
				if(!vm.selectedUser.fiilari) {
					vm.selectedUser.fiilari = [];
				}
				vm.selectedUser.fiilari.push(rate);
				vm.users.$save(vm.selectedUser);
				reset();
			}
			
			function reset() {
				vm.selectedUser = null;
				vm.verifySuccess = null;
			}
		}
	}
}());