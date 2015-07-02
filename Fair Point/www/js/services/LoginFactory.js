/* LOGIN FACTORY */
var LoginFactory = 

	['$scope', '$firebaseAuth',

		function($scope, $firebaseAuth) {

			var endPoint = 'https://fiery-torch-6348.firebaseio.com/users';
    		var usersRef = new Firebase(endPoint);
    		return $firebaseAuth(usersRef);

		}

	];