var app = angular.module('yasnoApp', ['ngRoute'])

  

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
       .when('/', {
            controller : 'categoryCtrl',
            templateUrl : 'templates/category.html'
        })
 
       .when('/about', {
            controller : 'aboutCtrl',
            templateUrl : 'templates/about.html'
        })
        .when('/museum', {
            controller : 'museumCtrl',
            templateUrl : 'templates/museum.html'
        })
 
       
        .otherwise({
            redirectTo : '/'
        });
}]);
