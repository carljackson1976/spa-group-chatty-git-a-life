var chatty =(function(writeChatty){

	var input = document.getElementById("inputMessage");
	var currentMessage;
	var counter;
	var output = document.getElementById("outputMessage");
	var userName;
	var selectedName = "ChattyBot: NO USER SELECTED LOSER! Please sign in ( - ";




	writeChatty.writeMessage=function(id, message, names){
		var date = new Date();
		output.innerHTML += `<div id="message${id}" class="message">` + `<em style="font-weight="900"">${names}: </em>` + message +`<div class="date">`+
		date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds() + `</div><input type="button" value="delete" id="delete${id}"><hr></div>`
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

			 //conditional statement that checks for an empy string
			 //if empty it turns input red and reads error message
			 if ( input.value === "" ) {
				 input.classList.add('error');
				 input.setAttribute('placeholder','Please enter a message.');
				 return
			 } else if ( userName[i].checked === true ) {
				selectedName = userName[i].value;
				input.classList.remove('error');
			}//end of conditional statement

			writeChatty.messageLimit();

		}//end for loop

	 		counter++;
	 		writeChatty.writeMessage(counter, input.value, selectedName);
	 		chatty.addDelete();
	 		document.getElementById("deleteMssgsBtn").disabled=false;
			}
	 	});


		//function that checks how many messages have been sent
		writeChatty.messageLimit = function() {

			//determines what number the message is
			if ( counter > 19 ) {
				console.log('Limit reached', i)
				document.getElementById(`message${i}`).remove();
				i++;
			}

		}// end of writeChatty.messageLimit function




	return writeChatty;

})(chatty || {});
chatty.loadMessages();
