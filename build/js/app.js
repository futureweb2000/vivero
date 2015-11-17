(function(){
	var app = angular.module('vivero', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
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

				.when('/contacto',{

					templateUrl: 'views/contacto.html'
					// controller: 'csdcsdController'
					// controllerAs: 'asasCtrl'
				})

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

			//Directivas//

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


	



	$('.showNav').on('click', function(){

		$('.nav ul').slideToggle(300,'linear');
	});

	loadGoogleIcons('https://fonts.googleapis.com/icon?family=Material+Icons');


	//Cargar CSS desde JS para EVITE ser Bloqueantes

	function loadGoogleIcons(url){
		var elem  = document.createElement('link');
		elem.rel = 'stylesheet';
		elem.href = url;
		document.head.appendChild(elem);
	}






})();




