var module = angular.module('autor');

module.controller('AutorCriarCtrl', ['$scope', '$http', AutorCriarCtrl]);

function AutorCriarCtrl($scope, $http){
    
    $scope.salvar = function(){

        $scope.mensagem = "Enviando os dados.";

        var promise = $http.post('https://bibliapp.herokuapp.com/api/authors', 
            $scope.autor
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Os dados do autor foram salvo com sucesso";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            } 
        );
    };
}