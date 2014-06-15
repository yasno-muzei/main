var app = angular.module('yasnoApp', ['ngRoute'])

  
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'mainCtrl',
            templateUrl : 'index.html'
        })
        .otherwise({
            redirectTo : '/'
        });
}]);