mainApp.controller('teamCtrl', function($scope, $http) {
    $scope.teams = [];
    $scope.web = [];
    $scope.android = [];
    $scope.video = [];
    console.log("hey");
    $http.get(apiUrl + "teams").then(function (res) {

        for(var i in res.data){
            if(i < 2)
                $scope.web.push(res.data[i]);
            else if(i < 5)
                $scope.android.push(res.data[i]);
            else
                $scope.video.push(res.data[i]);
        }
    }, function (err) {
        console.log("Please staaaaap F5");
    });
});