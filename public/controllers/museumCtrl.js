function museumCtrlCtrl($scope, $http) {
	$http({method: 'GET', url: '/category/list'}).
    success(function(data, status, headers, config) {
    	$scope.cetegories = data;
    
    }).
   	error(function(data, status, headers, config) {
    });
        

  $scope.showMuseum = function(id){
  	console.log(id)
  };
}