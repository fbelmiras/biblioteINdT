var module = angular.module('autor');

module.controller('AutorDetalheCtrl',['$scope', '$http', '$routeParams', AutorDetalheCtrl]);

function AutorDetalheCtrl($scope, $http, $routeParams) {
   
    var id = $routeParams.id;

    var promise = $http.get('https://bibliapp.herokuapp.com/api/authors/' + id);

    promise.then(
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