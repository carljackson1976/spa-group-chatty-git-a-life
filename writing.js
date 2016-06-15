var chatty =(function(writeChatty){

	var input = document.getElementById("inputMessage");
	var currentMessage;
	var counter;
	var output = document.getElementById("outputMessage");
	var maxMessages = document.getElementById('maxMessages');
	var goAwayButton = document.getElementById('goAwayButton');
	var userName;
	var selectedName = "Guest";
	var limit = 0;




	writeChatty.writeMessage=function(id, message, names){
		var date = new Date();
		output.innerHTML += `<div id="message${id}" class="message">` + `<em style="font-weight="900"">${names}: </em><div id="messageText${id}">` + message +`</div><div class="date">`+
		date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds() + `</div><input type="button" value="delete" id="delete${id}"><input type="button" value="edit" id="edit${id}"><hr></div>`
		//keeps track of the number of messages
		counter=id;
		};
	input.addEventListener("keyup", function(){
	 	if(event.code==="Enter"){
			input.classList.remove('error');

		//conditional statements to determine what user name is selected
		userName = document.getElementsByName('users');
		//for loop checks which radio is checked and passes the
		//checked user name to the write message
		for ( let i = 0; i < userName.length; i++ ) {
			if(userName[i].checked){
				selectedName=userName[i].value;
			}
			 //conditional statement that checks for an empy string
			 //if empty it turns input red and reads error message
			 if ( input.value === "" ) {
				 input.classList.add('error');
				 input.setAttribute('placeholder','Please enter a message.');
			 }


		}//end for loop

	 		counter++;
	 		writeChatty.writeMessage(counter, input.value, selectedName);
	 		input.value="";
	 		chatty.addDelete();
	 		document.getElementById("deleteMssgsBtn").disabled=false;
			//clears output div if greater than 20 messages
			writeChatty.messageLimit();
		}//end if statement testing for enter key
	});//end keyup event listener


		//function that checks how many messages have been sent
		writeChatty.messageLimit = function() {

			//determines what number the message is
		if ( counter === 20 ) {
			maxMessages.classList.remove('hide');
			maxMessages.classList.add('maxMessagesAn');
			goAwayButton.addEventListener('click', function() {
				maxMessages.classList.add('hide');
			});
		} else if ( counter > 20 ) {
				document.getElementById(`message${limit}`).remove();
				limit++;
		};
		}// end of writeChatty.messageLimit function




	return writeChatty;

})(chatty || {});
chatty.loadMessages();
