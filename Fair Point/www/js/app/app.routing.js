var appRouting = function($stateProvider, $urlRouterProvider) 
{
	$stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppController'
    })

  	/* OVERVIEW */
  	.state('app.overview', {
    	url: "/overview",
    	views: {
      		'menuContent': {
        		templateUrl: "templates/overview.html",
        		controller: 'OverviewController'
      		}
    	}	
  	})

	/* POINTS */
	.state('app.points', {
	    url: "/points",
	    views: {
	        'menuContent': {
	  	        templateUrl: "templates/points.html",
	      		controller: 'PointsController'
	      	}
	    }
  	})

	/* INDIVIDUAL POINTS */
	.state('app.point', {
	    url: "/points/:pointId",
	    views: {
	 	   'menuContent': {
	    	    templateUrl: "templates/point.html",
	        	controller: 'PointController'
	      	}
    	}
  	})

	/* FRIENDS */
	.state('app.friends', {
	    url: "/friends",
	    views: {
		    'menuContent': {
	    	    templateUrl: "templates/friends.html",
	        	controller: 'FriendsController'
	      	}
	    }
	})

	/* RULES */
	.state('app.rules', {
	    url: "/rules",
	    views: {
		    'menuContent': {
	    	    templateUrl: "templates/rules.html",
	        	controller: 'RulesController'
	      	}
	    }
  	})

	/* SETTINGS */
	.state('app.settings', {
	    url: "/settings",
	    views: {
		    'menuContent': {
	    	    templateUrl: "templates/settings.html",
	        	controller: 'SettingsController'
	      	}
	    }
  	})

	/* LOGIN */
	.state('login', {
	    url: "/login",
	    templateUrl: "templates/login.html",
	    controller: 'LoginController'
  	});

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/login');
};