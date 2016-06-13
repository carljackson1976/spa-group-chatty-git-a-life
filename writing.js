var chatty =(function(writeChatty){
	var output = document.getElementById("outputMessage");
	writeChatty.writeMessage=function(id, message){
		output.innerHTML += `<div id="message${id}">` + message + date.now()+`</div>`

	}
	return writeChatty;

})(chatty || {});
chatty.loadMessages();
