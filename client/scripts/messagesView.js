var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.empty();
  },

  renderMessage: function(msg) {
    if (!msg.username || !msg.text) {
      return;
    }
    MessagesView.$chats.append(MessageView.render(msg));
  },

  render: function() {
  }

};