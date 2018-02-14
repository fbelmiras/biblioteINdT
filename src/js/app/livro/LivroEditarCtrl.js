var module = angular.module('autor');

module.controller('LivroEditarCtrl', ['$scope', '$http', '$routeParams', LivroEditarCtrl]);

function LivroEditarCtrl($scope, $http, $routeParams){

    var id = $routeParams.id;

    var promise = $http.get('https://bibliapp.herokuapp.com/api/books/' + id);

    promise.then(
        function(response){        
            $scope.livro = response.data;
        }
    );
    
    $scope.salvarLivro = function(){
        $scope.mensagem = "Enviando os dados.";

        var promise = $http.put(
            'https://bibliapp.herokuapp.com/api/books/' + $scope.livro.id, 
            $scope.livro
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