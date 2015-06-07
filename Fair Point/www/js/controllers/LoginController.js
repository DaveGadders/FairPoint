/* LOGIN CONTROLLER */
var LoginController = 

	['$scope', '$state', '$ionicPopup',

		function($scope, $state, $ionicPopup) {

			/* LOGIN CHECK */
			$scope.LogIn = function(user) {

			    $state.go('app.overview');

		    };

			/* FORGOTTEN PASSWORD */
			$scope.showPopup = function() {
			    
			    $scope.data = {};

			    var myPopup = $ionicPopup.show({

			        template: '<input type="email" ng-model="data.email">',
			        title: 'Forgot Your Password',
			        subTitle: 'Please enter your email and we will send you a new password',
			        scope: $scope,
			        buttons: [

			            {
				            text: '<b> Send </b>',
			                type: 'button-balanced button-outline',
			                
			                onTap: function(e) {
			                 
			                    if (!$scope.data.email) 
			                    {
			                        
			                        //Don't allow the user to close unless he enters an email address
			                        e.preventDefault();
			                    } 
			                    else {
			                        
			                        return $scope.data.email;
			                    }
			                
			                }
			            },
			            { 
			                text: '<b> Cancel </b>',
			                type: 'button-positive button-outline' 
			            }

			        ]

			    });

			};

		}

	];