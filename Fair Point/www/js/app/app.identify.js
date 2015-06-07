var appIdentify = ['$ionicAppProvider', function($ionicAppProvider) 
{
    // Identify app
    $ionicAppProvider.identify({
        
        // The App ID (from apps.ionic.io) for the server
        app_id: '5923e121',
        
        // The public API key all services will use for this app
        api_key: '1ad4b961a53e3254ab84de9a0326946b5be2abb07c720d6b',
        
        // Set the app to use development pushes
        dev_push: true
    
    });
}];