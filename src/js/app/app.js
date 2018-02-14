var module = angular.module('autor', ['ngRoute', 'angularUtils.directives.dirPagination']);

module.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'AutorListarCtrl',
            templateUrl: 'telas/autor/listarautor.html'
        })
        .when('/criar', {
            controller: 'AutorCriarCtrl',
            templateUrl: 'telas/autor/criarautor.html'
        })
        .when('/detalhes/:id', {
            controller: 'AutorDetalheCtrl',
            templateUrl: 'telas/autor/detalhesautor.html'
        })
        .when('/editar/:id', {
            controller: 'AutorEditarCtrl',
            templateUrl: 'telas/autor/editarautor.html'
        })
        .when('/remover/:id', {
            controller: 'AutorRemoverCtrl',
            templateUrl: 'telas/autor/removerautor.html'
        })
        .when('/livro', {
            controller: 'LivroListarCtrl',
            templateUrl: 'telas/livro/listarlivro.html'
        })
        .when('/criarlivro', {
            controller: 'LivroCriarCtrl',
            templateUrl: 'telas/livro/criarlivro.html'
        })
        .when('/detalheslivro/:id/:authorId', {
            controller: 'LivroDetalheCtrl',
            templateUrl: 'telas/livro/detalheslivro.html'
        })
        .when('/detalheslivro/:id', {
            controller: 'AutorEditarCtrl',
            templateUrl: 'telas/autor/detalhesautor.html'
        })
        .when('/editarlivro/:id', {
            controller: 'LivroEditarCtrl',
            templateUrl: 'telas/livro/editarlivro.html'
        })
        .when('/removerlivro/:id', {
            controller: 'LivroRemoverCtrl',
            templateUrl: 'telas/livro/removerlivro.html'
        });
}]
);
