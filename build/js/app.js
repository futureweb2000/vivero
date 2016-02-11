(function(){
	var app = angular.module('vivero', ['ngRoute']);
	app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
			$locationProvider.html5Mode(true);
				

			$routeProvider
				.when('/', {

					templateUrl: 'views/pagina-principal.html'
					// controller: 'csdcsdController'
					// controllerAs: 'asasCtrl'
				})
				.when('/plantas',{

					templateUrl: 'views/plantas.html'
					// controller: 'PlantaController'
				})
				.when('/nosotros',{

					templateUrl: 'views/nosotros.html'
					// controller: 'TabsController'
					// controllerAs: 'asasCtrl'
				})

				.when('/galeria',{

					templateUrl: 'views/galeria.html'
					// controller: 'TabsController'
					// controllerAs: 'asasCtrl'
				})

				.when('/contacto',{

					templateUrl: 'views/contacto.html'
					// controller: 'csdcsdController'
					// controllerAs: 'asasCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});



		}]);


	

	app.controller('PlantaController',['$scope', '$http',function($scope,$http){

			$scope.plantas = [];
			$http.get('js/plantas.json')
				.success(function(datos){
					$scope.plantas = datos;

				});


	}]);


	app.controller('TabsController', function(){

		this.tab = 1;

		this.selectTab = function(tab){

			this.tab = tab;
		}
	});

			//Directives//

	app.directive('paginaPrincipal', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/pagina-principal.html'
		}

	});


	app.directive('paginaContacto', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/contacto.html'
		}

	});


	app.directive('paginaNosotros', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/nosotros.html'
		}

	});

	app.directive('paginaPlantas', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/plantas.html'
		}

	});
	//---------------->

	



	// Show and hide navigation for mobile
	$('.showNav').on('click', function(){

		$('.nav ul').slideToggle(300,'linear');

	});

	//---------------->



	// Hide navigation after click
	$('.nav ul li a').click(function(){
	    
	    $("body").animate({ scrollTop: 0 }, 500);
	    if($(document).width() < 900){

			$('.nav ul').slideToggle(300,'linear');

		}

 	});

 	//----------------->



	//Load CSS from JS for not be blocker

	function loadGoogleIcons(url){
		var elem  = document.createElement('link');
		elem.rel = 'stylesheet';
		elem.href = url;
		elem.type = 'tex/css';

		document.head.appendChild(elem);
	}

		loadGoogleIcons('https://fonts.googleapis.com/icon?family=Material+Icons');
		loadGoogleIcons('https://fonts.googleapis.com/css?family=Roboto:400,300,700,700italic,400italic,300italic');
		loadGoogleIcons('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
		loadGoogleIcons('https://fonts.googleapis.com/css?family=Lora:400,700');

	




// Get year with only vanilla JS
var date = new Date();

var dateString = date.toString();

var dateSeparated = dateString.split(" ");

var year = dateSeparated[3];


$('.year').html(year);

})();




