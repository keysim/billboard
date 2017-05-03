mainApp.controller('loginCtrl', function($scope, $http, $location, $cookies, $timeout, $window) {
    $scope.loginBtn = "Login";
    $scope.loginClass = "btn-primary";

    $scope.registerBtn = "Register";
    $scope.registerClass = "btn-primary";
    $scope.register = function () {
        var data = {password: $scope.pwd, email: $scope.email};
        $http.post(apiUrl + "register", $.param(data), postConfig).then(function(res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    $scope.log = function() {
        console.log("login...");
        $scope.loginBtn = "<div class='login_anim'></div>";
        //console.log($scope.login, $scope.pwd);
        var data = {password: $scope.pwd, email: $scope.email};
        $http.post(apiUrl + "authenticate", $.param(data), postConfig).then(function(res){
            console.log(res.data);
            $timeout(function() { // fake loading
                $scope.loginClass = "btn-primary login_out"; // Login fadeOut
                $timeout(function() {
                    if (!res.data.success) { // error
                        $scope.loginClass = "btn-danger login_in"; // Error fadeIn
                        $scope.loginBtn = res.data.message;
                        $timeout(function () {
                            $scope.loginClass = "btn-danger login_out";
                            $timeout(function () {
                                $scope.loginBtn = "Login";
                                $scope.loginClass = "btn-primary login_in";
                            }, 300);
                        }, 500);
                    }
                    else {
                        $scope.loginClass = "btn-success login_in";
                        $scope.loginBtn = "Welcome";
                        $cookies.put("token", res.data.token);
                        $cookies.put("email", $scope.email);
                        $timeout(function () {
                            $window.location.href = "./";
                        }, 400);
                    }
                }, 300);
            }, 800);
        });
    };
});