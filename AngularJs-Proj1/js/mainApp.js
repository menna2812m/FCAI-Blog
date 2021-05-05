var fcaiBlog = angular.module('fcaiBlog', ['ngRoute', 'ngMaterial']);

//configure our module to make the routing
fcaiBlog.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',
    {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    })

    .when('/login',
    {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    })

    .when('/register',
    {
        templateUrl: 'views/register.html',
        controller: 'registerController'
    })
}]);

