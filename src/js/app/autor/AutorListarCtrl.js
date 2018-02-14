var module = angular.module("autor");

module.controller("AutorListarCtrl", ['$scope', '$http', AutorListarCtrl]);

function AutorListarCtrl($scope, $http){
    
    var promise = $http.get('https://bibliapp.herokuapp.com/api/authors');

    promise.then(
        // Em caso de sucesso
        function(response){
            if(response.data.length){
                $scope.autores = response.data;
            } else {
                $scope.mensagem = "Nenhum autor cadastrado.";
            }
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );   
    
     $scope.ordenar = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };  
    
}
