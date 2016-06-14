var chatty = (function(loadChatty){
	var messageArray= [];
  var messages;
    var darkTheme= document.getElementById("dark-theme-option");
    var largeText= document.getElementById("large-text-option");
    var bgColor = document.getElementById("backgroundColor");
    var textColor = document.getElementById("textColor");
    var navColor = document.getElementById("navColor");
    var colorBtn = document.getElementById("colorBtn");

    



 loadChatty.loadMessages = function(){
  var myRequest = new XMLHttpRequest(); 
  myRequest.open("GET","messages.json");
  myRequest.send();	
  myRequest.addEventListener("load",function(){
  messageArray=JSON.parse(event.target.responseText).messages;
  for(i=0;i<messageArray.length;i++){
  chatty.writeMessage(i,messageArray[i]); 
  }
  var deleteAll=document.getElementById("deleteMssgsBtn");
  deleteAll.addEventListener("click",function(){
    chatty.deleteAll();
    if(document.getElementById("outputMessage").innerHTML===""){
      deleteAll.disabled=true;
    }
    
  });
  loadChatty.addDelete();
  loadChatty.setdarkTheme();
  loadChatty.setlargeText();
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
  
  loadChatty.setdarkTheme = function(){
    darkTheme.addEventListener("change", function(){
  document.body.classList.toggle("darkTheme");
    });
  }
  loadChatty.setCustomTheme = function(){
    document.getElementById("container").style.backgroundColor=`#${navColor.value}`;
    document.body.style.backgroundColor=`#${bgColor.value}`;
    document.body.style.color=`#${textColor.value}`;
  }
  

  loadChatty.setlargeText = function(){
    largeText.addEventListener("change", function(){
    let outputMessages = document.getElementById('outputMessage');	
  	outputMessages.classList.toggle("largeText");
    });
  }
  
  colorBtn.addEventListener("click", loadChatty.setCustomTheme);
  return loadChatty;	
})(chatty || {});
  
  


