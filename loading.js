var chatty = (function(loadChatty){
	var messageArray= [];
  var messages;
 loadChatty.loadMessages = function(){
  var myRequest = new XMLHttpRequest(); 
  myRequest.open("GET","messages.json");
  myRequest.send();	
  myRequest.addEventListener("load",function(){
  messageArray=JSON.parse(event.target.responseText).messages;
  for(i=0;i<messageArray.length;i++){
  chatty.writeMessage(i,messageArray[i]); 
  }
  loadChatty.addDelete();
  });
  }
    loadChatty.addDelete=function(){
    messages=document.getElementsByClassName("message");
    for(v=0;v<messages.length;v++){
    chatty.delete(messages[v]);
  }
  }
  loadChatty.getMessages = function(){
  	return messageArray;
  }
  return loadChatty;	
})(chatty || {});



