var AppController = 

	['$scope',

		function($scope) {
			
			$scope.logout = function(user) {
				$state.go('app');
			}

		}

	];