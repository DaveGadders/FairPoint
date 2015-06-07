angular.module('FairPoint', [
    'ionic',
    'ngCordova',
    'ionic.service.core',
    'ionic.service.push',
    'FairPoint.controllers',
])

.config(['$ionicAppProvider', function($ionicAppProvider) {
    
    // Identify app
    $ionicAppProvider.identify({
        
        // The App ID (from apps.ionic.io) for the server
        app_id: 'YOUR_APP_ID',
        
        // The public API key all services will use for this app
        api_key: 'YOUR_PUBLIC_API_KEY',
        
        // Set the app to use development pushes
        dev_push: true
    
    });

}])

.run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
        
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);    
        }
        
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
              templateUrl: "templates/search.html"
            }
        }
    })

    .state('app.browse', {
        url: "/browse",
        views: {
            'menuContent': {
              templateUrl: "templates/browse.html"
          }
        }
    })

    .state('app.playlists', {
        url: "/playlists",
        views: {
          'menuContent': {
              templateUrl: "templates/playlists.html",
              controller: 'PlaylistsCtrl'
          }
        }
    })

    .state('app.single', {
        url: "/playlists/:playlistId",
        views: {
            'menuContent': {
              templateUrl: "templates/playlist.html",
              controller: 'PlaylistCtrl'
          }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
});
