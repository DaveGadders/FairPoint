angular.module('FairPoint', [
    'ionic',
    'firebase',
    'ngCordova',
    'ionic.service.core',
    'ionic.service.push'
])

.factory('LoginFactory', function($firebaseAuth) {
    var endPoint = 'https://fiery-torch-6348.firebaseio.com/users';
    var usersRef = new Firebase(endPoint);
    return $firebaseAuth(usersRef);
})

/* CONTROLLERS */
.controller('AppController', AppController)
.controller('LoginController', LoginController)
.controller('OverviewController', OverviewController)
.controller('PointsController', PointsController)
.controller('PointController', PointController)
.controller('FriendsController', FriendsController)
.controller('RulesController', RulesController)
.controller('SettingsController', SettingsController)

/* APP */
.run(appRun)

.config(appIdentify)

.config(appRouting);