var chatty = (function(loadChatty){
	var messageArray= [];
    var darkTheme= document.getElementById("dark-theme-option");
    var largeText= document.getElementById("large-text-option");



 loadChatty.loadMessages = function(){
  var myRequest = new XMLHttpRequest(); 
  myRequest.open("GET","messages.json");
  myRequest.send();	
  myRequest.addEventListener("load",function(){
  messageArray=JSON.parse(event.target.responseText).messages;
  for(i=0;i<messageArray.length;i++){
    chatty.writeMessage(i,messageArray[i]);
  }
  loadChatty.setdarkTheme();
  loadChatty.setlargeText();
   
  });
  }
  loadChatty.getMessages = function(){
  	return messageArray;
  }
  
  loadChatty.setdarkTheme = function(){
    darkTheme.addEventListener("change", function(){
  document.body.classList.toggle("darkTheme");
    });
  }
  

  loadChatty.setlargeText = function(){
    largeText.addEventListener("change", function(){
    let outputMessages = document.getElementById('outputMessage');	
  	outputMessages.classList.toggle("largeText");
    });
  }
  



  return loadChatty;	
})(chatty || {});
  
  

