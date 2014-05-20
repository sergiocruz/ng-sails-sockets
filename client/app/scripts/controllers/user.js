'use strict';

angular.module('socketClientApp')
  .controller('UserCtrl', function UserCtrl($scope, Usersocket) {

    /**
     * Array of user objects, below is an object sample:
     * {
     *   id: 1,
     *   name: "Sergio Cruz",
     *   createdAt: "2014-05-19T21:21:41.718Z",
     *   updatedAt: "2014-05-19T21:21:41.718Z"
     * }
     * @type {Array}
     */
    $scope.users = [];

    // Connect to user socket
    var socket = Usersocket.connect();


    var refreshUsers;
    (refreshUsers = function refreshUsers() {

      // Gets user via socket
      socket.get('/user', onUserGet);

    })();

    // Callback after socket call
    function onUserGet(users) {
      
      // Sets scope users
      $scope.users = users;

      $scope.$apply();
    };

    Usersocket.onMessageReceived(function(message) {
      console.log('got sum', message);

      // Refresh all users
      if (message.model === 'user') {
        refreshUsers();
      }
    });

  });
