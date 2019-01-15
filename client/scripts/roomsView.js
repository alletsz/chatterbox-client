var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomNames: [],

  initialize: function() {
  },
  
  addRoomName: function(roomName) {
    if (!RoomsView.roomNames.includes(roomName)) {
      RoomsView.roomNames.push(roomName);
      return true;
    }
    return false;
  },

  renderRoom: function(roomName) {
    if (!roomName) {
      return;
    }
    // RoomsView.$select.attr("value", );
    if (RoomsView.addRoomName(roomName)) {
      var htmlObj = RoomsView.render(
        {idValue: roomName.toLowerCase(), value: roomName}
      );
      RoomsView.$select.append(htmlObj);
    }
  },
  
  render: _.template('<option value="<%- idValue %>"><%- value %></option>'),
};
