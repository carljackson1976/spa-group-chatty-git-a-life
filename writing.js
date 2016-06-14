var chatty =(function(writeChatty){
	var date = new Date();
	var input = document.getElementById("inputMessage");
	var currentMessage;
	var counter;
	var output = document.getElementById("outputMessage");
	var userName;


	writeChatty.writeMessage=function(id, message, names){
		output.innerHTML += `<div id="message${id}" class="message">` + `<em style="font-weight="900"">${names}: </em>` + message +`<div class="date">`+
		date.toDateString()+" "+ date.toLocaleTimeString()+`</div><input type="button" value="delete" id="delete${id}"><hr></div>`
		//keeps track of the number of messages
		counter=id;
		};
	input.addEventListener("keyup", function(){
	 	if(event.code==="Enter"){


	 		counter++;
	 		writeChatty.writeMessage(counter, input.value, userName);
	 		chatty.addDelete();
	 		document.getElementById("deleteMssgsBtn").disabled=false;
	 	}
	 	});

		//conditional statements to determine what user name is selected
		userName = document.getElementsByName('users');
		//for loop checks which radio is checked and passes the
		//checked user name to the write message
		for ( let i = 0; i < userName.length; i++ ) {
			if ( userName[i].checked ) {
				userName = userName[i].value;
			}
		}//end for loop


	return writeChatty;

})(chatty || {});
chatty.loadMessages();
