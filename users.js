//IIFE that organizes users
var Chatty = (function( userChatty ) {

  var users = {
    "names": ["Xavier", "Joanna", "Mackenzie", "Iveta", "Sven"]
  };

  userChatty.getUsers = function() {
    return users;
  };



  console.log(userChatty.getUsers());

  return userChatty;

})( Chatty || {} );
