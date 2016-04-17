(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('companyService', companyService);
	
	companyService.$inject = ['$firebaseObject', 'firebaseDataService'];
	function companyService($firebaseObject, firebaseDataService) {
		
		var service = {
			addCompanyName: addCompanyName,
			getCompany: getCompany
		};
		
		return service;
		
		function addCompanyName(companyId, name) {
			var obj = $firebaseObject(firebaseDataService.companies.child(companyId));
			obj.name = name;
			return obj.$save();
		}
		
		function getCompany(companyId) {
			var obj = $firebaseObject(firebaseDataService.companies.child(companyId));
			return obj.$loaded();
		}
	}
	
}());