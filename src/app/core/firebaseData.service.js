(function () {
	'use strict';
	
	angular
		.module('app.core')
		.factory('firebaseDataService', firebaseDataService);
	
	firebaseDataService.$inject = ['FIREBASE_URL'];
	
	function firebaseDataService(firebaseUrl) {
		var root = new Firebase(firebaseUrl);
		var service = {
			root: root,
			companies: root.child('companies')
		};
		
		return service;
		
	}
}());