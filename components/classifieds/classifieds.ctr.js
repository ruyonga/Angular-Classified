(function() {
	"use strict";

	angular
	.module('ngClassifieds')
	.controller('classfiedsCtrl', function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){   //inject the service in the controller to create the connection between the service and controller

			var vm = this;
			vm.openSidebar = openSidebar;
			vm.closeSidebar = closeSidebar;
			vm.saveClassified = saveClassified;
			vm.editClassified = editClassified;
			vm.saveEdit = saveEdit; 
			vm.deleteClassified = deleteClassified;
			vm.cateogries;
			vm.classifieds;
			vm.editing;
			vm.classified;


		// $http.get('data/classifieds.json').then(function(classifieds){    ==better to user services
			classifiedsFactory.getClassifieds().then(function (classifieds) {
			vm.classifieds = classifieds.data;
			//vm.cateogries = getCategories(vm.classified);
			//console.log(classifieds.data);
			}) ; //promises ===used to handle asyncs


			var contact = {
				name: "Ruyonga daniel",
				phone: "078899000",
				email: "druyonga@gmail.com"
			}




			//open the sidebar
			function openSidebar(){
				// body...
				//$mdSidenav('left').open();
				$state.go('classifieds.new');
			}

			//close the side bar
			function closeSidebar() {
				// body...
				$mdSidenav('left').close();
			}
			//save to json to the data
			 function saveClassified(classified) {
				// body...
				if(classified){ 
					classified.contact =  contact;   //append the contact object before savings
					vm.classifieds.push(classified);
					vm.classified = {};
					closeSidebar();
					

				}
			} // end savign scope

			//Editing classified
			 function editClassified(classified){

				vm.editing = true;
				 openSidebar();
				vm.classified = classified;
				showToast("classified saved");
			}

			 function  saveEdit(){
				vm.editing = false;
				vm.classified = {}
				closeSidebar();
				showToast("Edit classified saved");
			}

			 function  deleteClassified(event,classified){
				var confirm = $mdDialog.comfirm()
					.title('Are you sure you want to delete'+ classified.title +'?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event);
				$mdDialog.show(comfirm).then(function (){
					var index = $scope.classifieds.indexOf(classified);
					vm.classifieds.splice(index,1);
				}, function(){

				});
					
		}

			function showToast(message){
				$mdToast.show(
						$mdToast.simple()
						.content(message)
						.position('top, right')
						.hideDelay(3000)
						);
			}
		});
})();