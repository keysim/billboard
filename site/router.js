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
        .when('/login', {
            templateUrl: 'views/login.view.html',
            controller: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.view.html',
            controller: 'loginCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);