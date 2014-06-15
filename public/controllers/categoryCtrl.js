function categoryCtrl($scope, $http) {
	$http({method: 'GET', url: '/museum/list/539dbdb8dadc43440caf2832'}).
    success(function(data, status, headers, config) {
    	$scope.category = data;
    	console.log(data)
    }).
   	error(function(data, status, headers, config) {
    });



 $scope.museums = [
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    {
    	id: 1,
    	title:'Russian Academy of Arts', 
    	image:"http://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Imperial_Academy_of_Arts.jpg/640px-Imperial_Academy_of_Arts.jpg"
    },
    {id: 2, title:'Menshikov palace', image:"http://upload.wikimedia.org/wikipedia/commons/d/d9/Menshikov_palace.jpg"},
    {id: 3, title: 'Marble Palace', image: "http://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AlexandreIIImonument.jpg/1024px-AlexandreIIImonument.jpg"},
    ];
};