//Define the 4 controllers
fcaiBlog.controller('fcaiController', function(){

});

fcaiBlog.controller('homeController', function($scope){
    $scope.myObj = {
        // "Name" : "Alfreds Futterkiste",
        // "Country" : "Germany",
        // "City" : "Berlin"
    }
});

fcaiBlog.controller('loginController', ['$http', '$scope', function(){
    // $scope.login = function(){
    //     var server = "";
    //     var url = server+ "";
    //     console.log(2222);
    //     $http.post(url, $scope.user).then(
    //         function(response){
    //             alert('Success: ' + response);
    //         }, 
    //         function(response){
    //             alert('Error: ' + response);
    //         }
    //     );
    // }
}]);

fcaiBlog.controller('registerController', ['$http', '$scope', function($http, $scope){
    // $scope.register = function(){
    //     var server = "";
    //     var url = server+ "";
    //     console.log(2222);
    //     $http.post(url, $scope.user).then(
    //         function(response){
    //             //location path to home after login
    //             alert('Success: ' + response);
    //         }, 
    //         function(response){
    //             alert('Error: ' + response);
    //         }
    //     );
    // }
}]);

