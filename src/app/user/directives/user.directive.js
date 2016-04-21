(function() {
	'use strict';
	
	angular
		.module('app.user')
		.directive('psUser', psUser);
	
	function psUser() {
		return {
			restrict: 'E',
			templateUrl: 'app/user/directives/user.html',
			scope: {
				companyId: '=',
				userId: '='
			},
			controller: psUserController,
			controllerAs: 'vm',
			bindToController: true
		};
		
		psUserController.$inject = ['fiilaritService'];
		
		function psUserController(fiilaritService) {
			var vm = this;

			fiilaritService.getFiilaritByUserId(vm.companyId, vm.userId).then(function(fiilarit) {
				vm.fiilarit = fiilarit;
				countOverallFiilari(fiilarit);
			});
			
			function countOverallFiilari(fiilarit) {
				var result = 0;
				angular.forEach(fiilarit, function(value) {
					result += value.rate;
				});
				vm.overallFiilari = result;
			}
		}
	}
	
}());