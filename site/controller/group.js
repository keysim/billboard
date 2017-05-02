var mainApp = angular.module("mainApp", ['ngCookies']);//'ngRoute', 'ui.tinymce', 'ngFileUpload', 'ui.bootstrap', 'ui.bootstrap.tooltip', 'ui.bootstrap.modal', 'ngCookies', 'angularFileUpload'
var apiUrl = "/api/";
var postConfig = {headers : {'Content-Type': 'application/x-www-form-urlencoded'}}; //;charset=utf-8;

mainApp.controller('mainController', function() {
});

mainApp.controller('groupCtrl', function($scope, $http, $cookies, $timeout, $location, $window) {
    $scope.loginBtn = "Login";
    $scope.loginClass = "btn-primary";
    $scope.groups = [];
    $scope.getClass = function (id) {
        let tab = ["label-default", "label-primary", "label-success", "label-info", "label-warning", "label-danger"];
        var res = "label-default";
        if(tab[id])
            res = tab[id];
        return res;
    };
    $http.get(apiUrl + "groups").then(function (res) {
        $scope.groups = res.data;
    });
});