var listDevices = [];
var selectedDevice = {};

mainApp.controller('homeCtrl', function($scope, $http, $socket) {
  $scope.listDevices = listDevices;
  $scope.selectedDevice = selectedDevice;

  if(listDevices.length === 0) {
      $http.get(apiUrl + "devices").then(function (res) {
          $scope.listDevices = res.data;
          listDevices = res.data;
          if (res && res.data) {
            selectedPhone = res.data[0];
            console.log(res.data);
          }
      }, function (err) {
          if (err) return console.log(err);
          console.log("Good");
      });
  }

  $scope.activateCamera = function () {
    $socket.emit('camera-activate', { deviceId: selectedDevice.id });
    $socket.on('camera-activate-response', (data) => {
      console.log(data);
    });
  };

  $scope.takePicture = function () {
    $socket.emit('take-picture', { deviceId: selectedDevice.id });
    $socket.on('take-picture-response', (data) => {
      console.log(data);
    });
  };

});
