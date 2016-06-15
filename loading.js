var chatty = (function(loadChatty){
	var messageArray= [];
	var namesArray= [];
  var messages;
    var darkTheme= document.getElementById("dark-theme-option");
    var largeText= document.getElementById("large-text-option");
    var bgColor = document.getElementById("backgroundColor");
    var textColor = document.getElementById("textColor");
    var navColor = document.getElementById("navColor");
    var colorBtn = document.getElementById("colorBtn");
    var modalClose = document.getElementById("close");
    var modalOpen = document.getElementById("modalButton");






 loadChatty.loadMessages = function(){
  var myRequest = new XMLHttpRequest();
  myRequest.open("GET","messages.json");
  myRequest.send();
  myRequest.addEventListener("load",function(){
  messageArray=JSON.parse(event.target.responseText).messages;
  namesArray=JSON.parse(event.target.responseText).names;
  for(i=0;i<messageArray.length;i++){
  chatty.writeMessage(i,messageArray[i], namesArray[i]);
  }
  var deleteAll=document.getElementById("deleteMssgsBtn");
  deleteAll.addEventListener("click",function(){
    chatty.deleteAll();
    if(document.getElementById("outputMessage").innerHTML===""){
			document.getElementById("outputMessage").innerHTML = '<h1>No Messages Here!</d1>';
      deleteAll.disabled=true;
    } else {
			document.getElementById("outputMessage").innerHTML = "";
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
  loadChatty.displayModal = function(){
    document.getElementById("colorModal").classList.toggle("visible");
  }

  loadChatty.setlargeText = function(){
    largeText.addEventListener("change", function(){
    let outputMessages = document.getElementById('outputMessage');
  	outputMessages.classList.toggle("largeText");
    });
  }

  modalClose.addEventListener("click", loadChatty.displayModal);
  modalOpen.addEventListener("click", loadChatty.displayModal);
  colorBtn.addEventListener("click", loadChatty.setCustomTheme);

  return loadChatty;
})(chatty || {});
