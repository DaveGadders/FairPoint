/* SETTINGS CONTROLLER */
var SettingsController = 

	['$scope', '$ionicModal',

		function($scope, $ionicModal) {
			
	  		$ionicModal.fromTemplateUrl('templates/aboutModal.html', {
		   		scope: $scope,
		    	animation: 'slide-in-up'
		  	})
		  
		  	.then(function(modal) {
		    	$scope.modal = modal;
		  	});

		  	$scope.openModal = function() {
		    	$scope.modal.show();
		  	};

		  	$scope.closeModal = function() {
		    	$scope.modal.hide();
		  	};

		  	//Cleanup the modal when we're done with it!
		  	$scope.$on('$destroy', function() {
		    	$scope.modal.remove();
		  	});

		  	// Execute action on hide modal
	  		$scope.$on('modal.hidden', function() {
		    	// Execute action
		  	});

		  	// Execute action on remove modal
		  	$scope.$on('modal.removed', function() {
		    	// Execute action
		  	});

		  	/* CREW LIST - NG REPEAT */
		  	$scope.crews = [
		  		{ name: 'Dave Gadsden', age: '22', position: 'Front End', photo: '../img/ionic.png', description: 'Daves Description', twitter: '', linkedin: '', google: '' },
		  		{ name: 'Iain Earl', age: '23', position: 'Dev Ops', photo: '../img/ionic.png', description: 'Iains Description', twitter: '', linkedin: '', google: '' }
		  	];

		}

	];