// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('timerController', function ($scope) {
  $scope.time = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  $scope.countdown = {};
  $scope.timerStart = function() {
    $scope.countdown = $scope.time;
    $scope.clear = setInterval($scope.counter, 1000)
  }

  $scope.counter = function() {
      if ($scope.countdown.seconds === 0) {
        if ($scope.countdown.minutes === 0) {
          $scope.countdown.hours -= 1;
          $scope.countdown.minutes = 59;
        } else {
          $scope.countdown.minutes -= 1;
        }
        $scope.countdown.seconds = 59;
      } else {
        $scope.countdown.seconds -= 1;
      }
    $scope.finish()
    $scope.$apply()
  }

  $scope.finish = function(){
    if ($scope.countdown.seconds === 0 &&
        $scope.countdown.minutes === 0 &&
        $scope.countdown.hours === 0 ) {
      clearInterval($scope.clear)
    }
  }
})



