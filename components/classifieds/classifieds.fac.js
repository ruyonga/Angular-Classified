(function () {
	// body...
	"use strict";

	angular
	.module("ngClassifieds")
	.factory('classifiedsFactory',  function($http){    //create a service called classifieds that take $http function
		//create a method getClassifieds()  ==that is retuned by the classified servce.

		function getClassifieds(){
			return $http.get("data/classifieds.json")
		}

		return {
			getClassifieds: getClassifieds
		};
	});
})();