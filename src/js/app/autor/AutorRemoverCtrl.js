var module = angular.module('autor');

module.controller('AutorRemoverCtrl', ['$scope', '$http', '$routeParams', AutorRemoverCtrl]);

function AutorRemoverCtrl($scope, $http, $routeParams) {
    
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
    
    $scope.removerautor = function(){
        $scope.mensagem = 'Enviado osvvv dados.' ;

        var cont = $http.get('https://bibliapp.herokuapp.com/api/authors/' + id + '/books/count');

       

        cont.then(
        // Em caso de sucesso
        function(response){
            $scope.cont = response.data;
            var tam = $scope.cont;

            var str = JSON.stringify(response.data);  
            var contact = JSON.parse(str);
            
            if(parseInt(contact.count) > 0){
                $scope.mensagem = 'Autor não pode ser excluído porque tem livros relacionados a ele!' ;
            }else{
                var promise = $http.delete('https://bibliapp.herokuapp.com/api/authors/' + $scope.autor.id);

                promise.then(
                    // Em caso de sucesso
                    function(){
                        $scope.autor = {};
                        $scope.mensagem = 'Dados do autor apagados com sucesso.';
                    }, 
                    // Em caso de erro
                    function(response){
                        $scope.mensagem = '#Erro ' + response.status;
                    }
                );

            }
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
    }
}