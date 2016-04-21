(function() {
	'use strict';
	
	angular
		.module('app.fiilarit')
		.factory('fiilaritService', FiilaritService);
	
	FiilaritService.$inject = ['$firebaseArray', 'firebaseDataService'];
	
	function FiilaritService($firebaseArray, firebaseDataService) {
		var service = {
			getFiilariRatings: getFiilariRatings,
			getFiilaritByUserId: getFiilaritByUserId
		};
		
		return service;
		
		function getFiilariRatings() {
			var result = $firebaseArray(firebaseDataService.ratings);
			return result;
		}
		
		function getFiilaritByUserId(companyId, userId) {
			return $firebaseArray(firebaseDataService.companies
								.child(companyId)
								.child('users')
								.child(userId)
								.child('fiilari'))
								.$loaded();
		}
	}
}());