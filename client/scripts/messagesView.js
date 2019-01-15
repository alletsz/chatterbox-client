var MessagesView = {

  $chats: $('#chats'),
  filter: null, // roomName

  initialize: function() {
  },

  clearMessages: function() {
    MessagesView.$chats.empty();
  },

  renderMessage: function(msg) {
    if (!msg.username || !msg.text || !msg.roomname) {
      return;
    }
    if (MessagesView.filter === null) {
      MessagesView.filter = msg.roomname.toLowerCase();
    }
    if (MessagesView.filter !== msg.roomname.toLowerCase()) {
      return;
    }
    MessagesView.$chats.append(MessageView.render(msg));
  },

  render: function() {
  }

};