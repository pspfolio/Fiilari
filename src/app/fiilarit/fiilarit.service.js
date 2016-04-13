(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.factory('fiilaritService', FiilaritService);
	
	FiilaritService.$inject = ['$firebaseArray', 'firebaseDataService'];
	
	function FiilaritService($firebaseArray, firebaseDataService) {
		var service = {
			getFiilariRatings: getFiilariRatings
		};
		
		return service;
		
		function getFiilariRatings() {
			var result = $firebaseArray(firebaseDataService.ratings);
			return result;
		}
	}
}());