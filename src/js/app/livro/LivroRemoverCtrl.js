var module = angular.module('autor');

module.controller('LivroRemoverCtrl', ['$scope', '$http', '$routeParams', LivroRemoverCtrl]);

function LivroRemoverCtrl($scope, $http, $routeParams) {
    
    var id = $routeParams.id;
    
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
    
    $scope.removerLivro = function(){
        $scope.mensagem = 'Enviado os dados.';

        var promise = $http.delete('https://bibliapp.herokuapp.com/api/books/' + $scope.livro.id);

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.livro = {};
                $scope.mensagem = 'Dados do livro apagados com sucesso.';
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    }
}