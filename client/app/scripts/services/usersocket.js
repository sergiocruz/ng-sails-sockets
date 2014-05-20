'use strict';

angular.module('socketClientApp')
  .factory('Usersocket', function () {

    /**
     * IO Object previously defined in script tag included from remove server
     */
    var io = window.io;
    var socket = window.socket || null;
    var onMessageCallback = function() {};

    /**
     * Connects to remote server
     * @return {Object} Socket object
     */
    function connect() {

      // as soon as this file is loaded, connect automatically, 
      var socket = io.connect('http://10.55.56.83:1337');

      if (typeof console !== 'undefined') {
        log('Connecting to Sails.js...');
      }

      socket.on('connect', function socketConnected() {

        // Listen for Comet messages from Sails
        socket.on('message', function messageReceived(message) {

          ///////////////////////////////////////////////////////////
          // Replace the following with your own custom logic
          // to run when a new message arrives from the Sails.js
          // server.
          ///////////////////////////////////////////////////////////
          log('New comet message received :: ', message);
          //////////////////////////////////////////////////////

          // Callback
          onMessageCallback.apply(onMessageCallback, arguments);
        });

        // socket.get('/user', function(o) {
        //   log('Got user:', o);
        // });


      });


      // Expose connected `socket` instance globally so that it's easy
      // to experiment with from the browser console while prototyping.
      // window.socket = socket;


      // Simple log function to keep the example simple
      function log () {
        if (typeof console !== 'undefined') {
          console.log.apply(console, arguments);
        }
      }

      return socket;
    }

    
    return {

      onMessageReceived: function(cb) {
        onMessageCallback = cb;
      },

      /**
       * Gets socket connection
       * @return {object} Socket object
       */
      connect: function getSocket() {

        // If socket is null, executes connection
        if (socket === null) {
          socket = connect();
        }

        return socket;
      }
    }

  });
