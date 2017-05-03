var mainApp = angular.module("mainApp", ['ngCookies', 'ngRoute']);//'ngRoute', 'ui.tinymce', 'ngFileUpload', 'ui.bootstrap', 'ui.bootstrap.tooltip', 'ui.bootstrap.modal', 'ngCookies', 'angularFileUpload'
var apiUrl = "/api/";
var postConfig = {headers : {'Content-Type': 'application/x-www-form-urlencoded'}}; //;charset=utf-8;

mainApp.controller('mainController', function() {
});

angular.module('mainApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);