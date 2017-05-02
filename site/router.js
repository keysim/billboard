mainApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/billboard'
        })
        .when('/billboard', {
            templateUrl: 'views/billboard.view.html',
            controller: 'groupCtrl'
        })
        .when('/team', {
            templateUrl: 'views/team.view.html',
            controller: 'teamCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);