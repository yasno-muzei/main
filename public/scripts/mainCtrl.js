function mainCtrl($scope) {
  $scope.museums = [
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"}];
  $scope.cetegories = [
  	{id: 1, name: "Fine art"},
  	{id: 2, name: "Science and Natural History"},
  	{id: 3, name: "Biographical"},
  	{id: 4, name: "Local History"},
  ]
}