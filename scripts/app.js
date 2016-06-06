angular
 	.module("ngClassifieds", ["ui.router","ngMaterial"])
 	.config(function($stateProvider,$mdThemingProvider) {
 		
 			$mdThemingProvider.theme('default')
 				.primaryPalette('teal')
 				.accentPalette('orange');

            //states
 			$stateProvider
 			 	.state('classifieds',{
 			 		url: '/classifieds',
 			 		templateUrl: 'components/classifieds/classifieds.tpl.html',
 			 		controller: 'classfiedsCtrl as vm'
 			 	})
 			 	//create new product route
 			 	.state('classifieds.new',{
 			 		url: '/new',
 			 		templateUrl: 'components/classifieds/new/classifieds.new.tpl.html',
 			 		controller: 'newClassifiedCtrl as vm'
 			 	})
 			 	//edit prouct to edit toute
 			.state('classifieds.edit',{
 			 		url: '/edit',
 			 		templateUrl: 'components/classifieds/edit/classifieds.edit.tpl.html',
 			 		controller: 'editClassifiedCtrl as vm'
 			 	})
 			
	});

	// .controller('stateOneCtrl',function(){
	// 	var vm = this;
	// 	vm.message = "Hey from state one";
	// });
