'use strict';

angular.module('socketClientApp')
  .controller('UserDetailCtrl', function ($scope, $routeParams, Usersocket) {

    /**
     * User object
     * @type {Object}
     */
    $scope.user = {};

    // Connect to user socket
    var socket = Usersocket.connect();

    // Gets user via socket
    socket.get('/user/' + $routeParams.id, onUserGet);

    // Callback after socket call
    function onUserGet(user) {
      
      // Sets scope users
      $scope.user = user;

      $scope.$apply();
    }

    $scope.updateUser = function updateUser(user) {
      socket.put('/user/' + user.id, user, function() {
        console.log('updated');
      });
    };
    
  });
