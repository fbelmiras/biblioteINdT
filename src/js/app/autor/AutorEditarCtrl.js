var module = angular.module('autor');

module.controller('AutorEditarCtrl', ['$scope', '$http', '$routeParams', AutorEditarCtrl]);

function AutorEditarCtrl($scope, $http, $routeParams){

    var id = $routeParams.id;

    var promise = $http.get('https://bibliapp.herokuapp.com/api/authors/' + id);

    promise.then(
        function(response){        
            $scope.autor = response.data;
        }
    );
    
    $scope.salvar = function(){
        $scope.mensagem = "Enviando os dados.";

        var promise = $http.put(
            'https://bibliapp.herokuapp.com/api/authors/' + $scope.autor.id, 
            $scope.autor
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Dados salvo com sucesso.";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}