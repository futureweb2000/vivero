(function(){
	var app = angular.module('vivero', []);


	app.controller('PlantaController', function(){
		
		this.planta = {

			nombre:"ficus",
			precio: 150,
			categoria:"palmas",
			exposicion: "sol",
			id: 001
		}

		this.categorias = [
		"palmas",
		"colgantess",
		"rosales", 
		"arbustosss", 
		"piedras", 
		"pinos"]

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




