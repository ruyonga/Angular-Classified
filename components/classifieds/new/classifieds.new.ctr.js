(function(){
		"use strict";

		angular
			.module('ngClassifieds')
			.controller('newClassifiedCtrl', function($mdSidenav,$timeout, $mdDialog, classifiedsFactory){
					var vm = this;

					//this prevent loop[indefinite loop]
					$timeout(function(){
						$mdSidenav('left').open();
					});
			})
})();