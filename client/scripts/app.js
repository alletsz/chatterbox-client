var App = {

  $spinner: $('.spinner img'),
  $refresher: $('#refresh'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    App.$refresher.on('click', function() {
      alert('CLICKED');
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

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
