function museumCtrl($scope, $http) {

	
	$http({method: 'GET', url: '/museum/539db57a1dfb06290b48666e'}).
    success(function(data, status, headers, config) {
    	$scope.museum = data;
    
    }).
   	error(function(data, status, headers, config) {
    });
        

  $scope.showMuseum = function(id){
  	console.log(id)
  };
}