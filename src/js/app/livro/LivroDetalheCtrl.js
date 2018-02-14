var module = angular.module('autor');

module.controller('LivroDetalheCtrl',['$scope', '$http', '$routeParams', LivroDetalheCtrl]);

function LivroDetalheCtrl($scope, $http, $routeParams) {
   
    var id = $routeParams.id;
    var authorId = $routeParams.authorId;

    var promise = $http.get('https://bibliapp.herokuapp.com/api/books/' + id);

    promise.then(
        // Em caso de sucesso
        function(response){
            $scope.livro = response.data;
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );

    var promise2 = $http.get('https://bibliapp.herokuapp.com/api/authors/' + authorId);

    promise2.then(
        // Em caso de sucesso
        function(response){
            $scope.autor = response.data;
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
    

    

    
}