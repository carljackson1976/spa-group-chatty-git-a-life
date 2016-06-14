var chatty =(function(writeChatty){
	
	var input = document.getElementById("inputMessage");
	var currentMessage;
	var counter;
	var output = document.getElementById("outputMessage");
	var userName;
	var selectedName = "ChattyBot";
	
	


	writeChatty.writeMessage=function(id, message, names){
		var date = new Date();
		output.innerHTML += `<div id="message${id}" class="message">` + `<em style="font-weight="900"">${names}: </em><div id="messageText${id}">` + message +`</div><div class="date">`+
		date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds() + `</div><input type="button" value="delete" id="delete${id}"><input type="button" value="edit" id="edit${id}"><hr></div>`
		//keeps track of the number of messages
		counter=id;
		};
	input.addEventListener("keyup", function(){
	 	if(event.code==="Enter"){
	//conditional statements to determine what user name is selected
		userName = document.getElementsByName('users');
		
		//for loop checks which radio is checked and passes the
		//checked user name to the write message
		for ( let i = 0; i < userName.length; i++ ) {
			
			 if ( userName[i].checked ) {
				selectedName = userName[i].value;

			}
			
		
		}//end for loop

	 		counter++;
	 		writeChatty.writeMessage(counter, input.value, selectedName);
	 		input.value="";
	 		chatty.addDelete();
	 		document.getElementById("deleteMssgsBtn").disabled=false;
	 	}
	 	});

	


	return writeChatty;

})(chatty || {});
chatty.loadMessages();
