(function() {
	"use strict";

	angular
		.module('ngClassifieds')
		.controller('classfiedsCtrl', function($scope){
			
			$scope.classifieds = [
			{
				"id":"1",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{
				"id":"2",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1464054542268793.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{
				"id":"3",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1460158687090265.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},{
				"id":"4",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1358549934434943.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{
				"id":"5",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1464196194392187.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			},
			{
				"id":"6",
				"title": "20 Foot Equipemtnt Trailer",
				"price": "6000",
				"posted": "2015-10-24",
				"contact":{
					"name": "John Does",
					"phone":"(256) 705720751",
					"email": "druyonga@gmail.com"
				},
				"category":[
				"Vehicles","Parts and Accessories"
				],
				"image":"http://www.louisianasportsman.com/classifieds/pics/p1459461088977019.jpg",
				"views":213,
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip excillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			}

			];
		});

})();