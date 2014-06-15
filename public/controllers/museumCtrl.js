function museumCtrl($scope, $http) {

	
	$http({method: 'GET', url: '/museum/539dbdb8dadc43440caf2837'}).
    success(function(data, status, headers, config) {
    	$scope.museum = data;
    
    }).
   	error(function(data, status, headers, config) {
    });
        

  $scope.showMuseum = function(id){
  	console.log(id)
  };
}