var groups = [];

mainApp.controller('groupCtrl', function($scope, $http) {
    $scope.groups = groups;
    $scope.getClass = function (id) {
        let tab = ["label-default", "label-primary", "label-success", "label-info", "label-warning", "label-danger"];
        var res = "label-default";
        if(tab[id])
            res = tab[id];
        return res;
    };
    if(groups.length === 0) {
        $http.get(apiUrl + "groups").then(function (res) {
            $scope.groups = res.data;
            groups = res.data;
        }, function (err) {
            console.log("Please staaaaap F5");
        });
    }
    $scope.change = function (id) {
        var value = $("#" + id).val();
        if(value && value.length > 0) {
            var data = {rating: value};
            $http.put(apiUrl + "groups/" + id, $.param(data), postConfig)
                .then(function (response) {
                    console.log(response.data);
                }, function (err) {
                    console.log(err);
                });
        }
    };
});