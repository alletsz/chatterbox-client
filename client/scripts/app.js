var App = {

  $spinner: $('.spinner img'),
  $refresher: $('#refresh'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    FormView.setUser(App.username);

    RoomsView.initialize();
    MessagesView.initialize();

    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.$refresher.on('click', function() {
      MessagesView.clearMessages();
      App.startSpinner();
      App.fetch(App.stopSpinner);
    });

    RoomsView.$select.change(function() {
      App.changeRoom(this.value);
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var eachMsg of data.results) {
        MessagesView.renderMessage(eachMsg);
        RoomsView.renderRoom(eachMsg.roomname);
      }
      callback();
    });
  },

  changeRoom: function(roomName) {
    MessagesView.clearMessages();
    window.filter = roomName.toLowerCase();

    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
