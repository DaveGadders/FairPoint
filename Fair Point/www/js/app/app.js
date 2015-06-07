angular.module('FairPoint', [
    'ionic',
    'ngCordova',
    'ionic.service.core',
    'ionic.service.push'
])

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