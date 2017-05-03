mainApp.directive("header", function(){
    return {
        restrict : "E",
        templateUrl : "views/header.partial.html",
        controller: "headerCtrl"
    };
});

mainApp.controller('headerCtrl', function($scope, $http, $location) {
    $scope.getClass = function (path) {
        return $location.path() === "/" + path ? "active" : "";
    }
});