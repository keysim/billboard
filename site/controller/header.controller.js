mainApp.directive("header", function(){
    return {
        restrict : "E",
        templateUrl : "views/header.partial.html",
        controller: "headerCtrl"
    };
});

mainApp.controller('headerCtrl', function($scope, $http, $location, $cookies, $window) {
    if(!$cookies.get("email"))
        $scope.email_log = "Login";
    else
        $scope.email_log = $cookies.get("email");
    $scope.getClass = function (path) {
        return $location.path() === "/" + path ? "active" : "";
    };
    $scope.disconnect = function() {
        if($cookies.get("email")){
            console.log("COOKIES DELETED");
            $cookies.remove("token", { path: '/' });
            $cookies.remove("email", { path: '/' });
        }
        $window.location.href = "/";
    };
});