var module = angular.module("autor");

module.controller("LivroListarCtrl", ['$scope', '$http', LivroListarCtrl]);

function LivroListarCtrl($scope, $http){
    
    var promise = $http.get('https://bibliapp.herokuapp.com/api/books');

    promise.then(
        // Em caso de sucesso
        function(response){
            if(response.data.length){
                $scope.livros = response.data;



                for (var i=0; i<$scope.livros; i++){                   
                    
                    $scope.mensagem = "Nenhum livro cadastrado." + i;
                    var str = JSON.stringify(response.data[i]);  
                    var contact = JSON.parse(str);

                    var aut = $http.get('https://bibliapp.herokuapp.com/api/authors/' + contact.authorId);

                   aut.then(
                       function(res){
                           $scope.livros[i].autor = aut;
                       }
                   )

                    
                }



            } else {
                $scope.mensagem = "Nenhum livro cadastrado.";
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
