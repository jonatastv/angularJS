// Definindo um novo módulo para nossa aplicação
var app = angular.module ("instantSearch", []);

// filtro de pesquisa instantânea

app.filter ('searchFor', function () {

	// Todos os filtros devem retornar uma função. O primeiro 
	// parâmetro é um dado que será filtrado, e o segundo é um 
	// argumento que vai ser passado com dois pontos
	// searchFor: searchString

	return function (arr, searchString) {

		if (!searchString) {
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Usando o útil método forEach para iterar através do array
		angular.forEach (arr, function (item) {

			if (item.title.toLowerCase().indexOf(searchString) !== -1) {
				result.push(item);
			}
		});

		return result;
	};

});

// O Controlador

function InstantSearchController ($scope) {



	$scope.items = [
		{
			url: 'http://grupo.sankhya.com.br/hs/skwajuda-3.23/pt_BR/br_com_sankhya_core_cfg_administracaoservidorgoogle.html',
			title: 'jonjon ',
			image: 'https://lh6.googleusercontent.com/-S4JRFil2Mio/AAAAAAAAAAI/AAAAAAAAAZM/SoDL3SPaN-E/photo.jpg'
		},
		{
			url: 'http://professor.pucgoias.edu.br/SiteDocente/home/professor.asp?key=15168',
			title: 'Site professor Gilcimar',
			image: 'http://www.pucgoias.edu.br/capanovasol/img/logo.jpg'
		},
		{
			url: 'https://www.soluti.com.br/',
			title: 'SOLUTI - CERTIFICAÇÃO DIGITAL',
			image: 'https://www.soluti.com.br/wp-content/themes/soluti/assets/img/soluti-logo.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/06/digital-clock/',
			title: 'Como fazer um relógio digital com jQuery e CSS3',
			image: 'https://http2.mlstatic.com/D_Q_NP_625015-MLB25213103962_122016-Q.jpg'
		}
	];  
}




