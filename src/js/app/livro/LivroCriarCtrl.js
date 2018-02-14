var module = angular.module('autor');

module.controller('LivroCriarCtrl', ['$scope', '$http', LivroCriarCtrl]);

function LivroCriarCtrl($scope, $http){
    
    $scope.salvarLivro = function(){

        $scope.mensagem = "Enviando os dados.";

        var promise = $http.post('https://bibliapp.herokuapp.com/api/books', 
            $scope.livro
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Dados do livro salvo  com sucesso";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}