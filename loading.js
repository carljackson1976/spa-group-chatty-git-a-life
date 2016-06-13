var chatty = (function(loadChatty){
	var messageArray= [];
 loadChatty.loadMessages = function(){
  var myRequest = new XMLHttpRequest(); 
  myRequest.open("GET","messages.json");
  myRequest.send();	
  myRequest.addEventListener("load",function(){
  messageArray=JSON.parse(event.target.responseText).messages;
  for(i=0;i<messageArray.length;i++){
    chatty.writeMessage(i,messageArray[i]);
  }

   
  });
  }
  loadChatty.getMessages = function(){
  	return messageArray;
  }
  return loadChatty;	
})(chatty || {});


