var chatty =(function(writeChatty){
	var date = new Date();
	var input = document.getElementById("inputMessage");
	var currentMessage;
	var counter;
	var output = document.getElementById("outputMessage");
	writeChatty.writeMessage=function(id, message, names){
		output.innerHTML += `<div id="message${id}" class="message">` + `<em style="font-weight="900"">${names}: </em>` + message +`<div class="date">`+
		date.toDateString()+" "+ date.toLocaleTimeString()+`</div><input type="button" value="delete" id="delete${id}"><hr></div>`
		//keeps track of the number of messages
		counter=id;
		};
	input.addEventListener("keyup", function(){
	 	if(event.code==="Enter"){
	 		counter++;
	 		writeChatty.writeMessage(counter,input.value);
	 		chatty.addDelete();
	 		document.getElementById("deleteMssgsBtn").disabled=false;
	 	}
	 	});



	return writeChatty;

})(chatty || {});
chatty.loadMessages();
