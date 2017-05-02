mainApp.controller('groupCtrl', function($scope, $http) {
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
    }, function (err) {
        console.log("Please staaaaap F5");
    });
});