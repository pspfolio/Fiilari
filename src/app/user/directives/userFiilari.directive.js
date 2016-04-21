(function() {
	'use strict';
	
	angular
		.module('app.user')
		.directive('psUserFiilari', psUserFiilari);
	
	function psUserFiilari() {
		return {
			restrict: 'E',
			templateUrl: 'app/user/directives/userFiilari.html',
			scope: {
				companyId: '=',
				userId: '='
			},
			controller: psUserFiilariCtrl,
			controllerAs: 'vm',
			bindToController: true
		}
		
		psUserController.$inject = ['fiilaritService'];
		
		function psUserFiilariCtrl(fiilaritService) {
			var vm = this;

			fiilaritService.getFiilaritByUserId(vm.companyId, vm.userId)
				.then(function(fiilarit) {
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