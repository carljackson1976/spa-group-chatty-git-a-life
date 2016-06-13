var chatty =(function(writeChatty){
	var date = new Date();
	var currentMessage;
	var output = document.getElementById("outputMessage");
	writeChatty.writeMessage=function(id, message){
		output.innerHTML += `<div id="message${id}" class="message">` + message +`<div class="date">`+
		date.toDateString()+" "+ date.toLocaleTimeString()+`</div><input type="button" value="delete" id="delete${id}"></div>`
		};

	
	return writeChatty;

})(chatty || {});
chatty.loadMessages();

