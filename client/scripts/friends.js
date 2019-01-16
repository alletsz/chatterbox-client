var removeItemFromArr = function(arr, item) {
  var results = [];
  for (var eachItem of arr) {
    if (eachItem !== item) {
      results.push(item);
    }
  }
  return results;
};

var Friends = {
  friends: [],
  
  initialize: function() {
    //$('.username').click(function(event) {
    $('#chats').on('click', '.username', function() {
      console.log('clicked!');
      Friends.toggleStatus($(this).text());
      Friends.highlightFriends();
      // alert('USERNAME CLICKED');
      // Friends.toggleStatus(this.val);
      // Friends.highlightFriends();
    });
  },

  toggleStatus: function(username) {
    if (Friends.friends.includes(username)) {
      Friends.friends = removeItemFromArr(Friends.friends, username);
    } else {
      Friends.friends.push(username);
    }
  },

  highlightFriends: function() {

    var els = document.getElementsByClassName('username'); 
    // for each element
    // if the element has a username that is a friend
    // toggle color
    for (var element of els) {
      if (Friends.friends.includes(element.innerText)) {
        //$('.username').toggle("highlight");
        element.style.color = 'yellow';
      } else {
        element.style.removeProperty('color');
      }
    } 
  }
}; 