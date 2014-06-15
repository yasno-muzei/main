function mainCtrl($scope, $http) {
	$http({method: 'GET', url: '/category/list'}).
    success(function(data, status, headers, config) {
    	$scope.categories = data;
    	console.log($scope.categories)
    }).
   	error(function(data, status, headers, config) {
    });
    

 

  $scope.showMuseum = function(id){
  	console.log(id)
  };
}