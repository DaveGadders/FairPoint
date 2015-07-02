/* LOGIN CONTROLLER */
var LoginController = 

	['$scope', '$state', '$ionicPopup', 'LoginFactory', 

		function($scope, $state, $ionicPopup, LoginFactory) {

			/* LOGIN CHECK */
		    $scope.login = function(authMethod) {

				// $state.go('app.overview');
				LoginFactory.$authWithOAuthRedirect(authMethod).then(function(authData) {
			    }).catch(function(error) {
			      if (error.code === 'TRANSPORT_UNAVAILABLE') {
			        LoginFactory.$authWithOAuthPopup(authMethod).then(function(authData) {
			        });
			      } else {
			        console.log(error);
			      }
			    });

			    LoginFactory.$onAuth(function(authData) {
				    if (authData === null) {
				      console.log('Not logged in yet');
				    } else {
				      console.log('Logged in as', authData.uid);
				      alert('Logged in as', authData.uid);
      				  //$state.go('app.overview');
				    }
				    // This will display the user's name in our view
				    $scope.authData = authData;
			  	});

			  	$state.go('app.overview');

		    }

			/* FORGOTTEN PASSWORD */
			// $scope.showPopup = function() {
			    
			//     $scope.data = {};

			//     var myPopup = $ionicPopup.show({

			//         template: '<input type="email" ng-model="data.email">',
			//         title: 'Forgot Your Password',
			//         subTitle: 'Please enter your email and we will send you a new password',
			//         scope: $scope,
			//         buttons: [

			//             {
			// 	            text: '<b> Send </b>',
			//                 type: 'button-balanced button-outline',
			                
			//                 onTap: function(e) {
			                 
			//                     if (!$scope.data.email) 
			//                     {
			                        
			//                         //Don't allow the user to close unless he enters an email address
			//                         e.preventDefault();
			//                     } 
			//                     else {
			                        
			//                         return $scope.data.email;
			//                     }
			                
			//                 }
			//             },
			//             { 
			//                 text: '<b> Cancel </b>',
			//                 type: 'button-positive button-outline' 
			//             }

			//         ]

			//     });

			// };

		}

	];