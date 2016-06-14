var chatty = (function(deleteChatty){
		//accepts message to be deleted
		deleteChatty.delete=function(currentMessage){
		currentMessage.addEventListener("click",function(){
			console.log(event.target);
			//checks if delete button of message is pressed
				if(event.target.value==="delete"){
					//deletes current message
					currentMessage.remove();
					//if the output div is empty it disbles the delete all button
					if ( document.getElementById('outputMessage').innerHTML === "" ) {
						console.log("Hey")
						document.getElementById("deleteMssgsBtn").disabled=true;
					};//end second if statement
				};//end first if statement
			});//end event listener on delete messages for buttons
		};//end deleteChatty.delete function

		deleteChatty.deleteAll = function(){
			var output=document.getElementById("outputMessage");
			output.innerHTML="";
		}//end deleteChatty.deleteAll function

	return deleteChatty;

})(chatty || {});
