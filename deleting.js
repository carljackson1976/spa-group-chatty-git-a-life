var chatty = (function(deleteChatty){
	var counter =0;
	
		//accepts message to be deleted
		deleteChatty.delete=function(currentMessage){
		currentMessage.addEventListener("click",function(){
			//checks if delete button of message is pressed
				if(event.target.value==="delete"){
					//deletes current message
					currentMessage.remove();
					//if the output div is empty it disbles the delete all button
					if ( document.getElementById('outputMessage').innerHTML === "" ) {
						document.getElementById("deleteMssgsBtn").disabled=true;
					};//end second if statement
				};//end first if statement
				if(event.target.value==="edit"){
				
					var messageText = event.currentTarget;
					var message = event.currentTarget.childNodes[1].innerHTML;
					var inputString = `<input value="${message}" class="editer">`
					
					messageText.innerHTML=messageText.innerHTML.replace(`${message}`,inputString);
					var editBox=document.getElementsByClassName("editer")[0];
					
					editBox.addEventListener("keyup",function(){
						if(event.keyCode===13){
							
							var newMessage = event.target.value;
							messageText.childNodes[1].remove();
							messageText.childNodes[0].innerHTML+= `<div>${newMessage}</div>`;
							// messageText.innerHTML=messageText.innerHTML.replace(`${editBox}`,`${newMessage}`);
						}
						counter++;
					});



				}
			});//end event listener on delete messages for buttons
		};//end deleteChatty.delete function

		deleteChatty.deleteAll = function(){
			var output=document.getElementById("outputMessage");
			output.innerHTML="";
		}//end deleteChatty.deleteAll function

	return deleteChatty;

})(chatty || {});
