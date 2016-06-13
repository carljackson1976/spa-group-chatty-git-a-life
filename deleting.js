var chatty = (function(deleteChatty){
		//accepts message to be deleted
		deleteChatty.delete=function(currentMessage){
		currentMessage.addEventListener("click",function(){
			console.log(event.target);
			//checks if delete button of message is pressed
			if(event.target.value==="delete"){
				//deletes message
				currentMessage.remove();
			}
		});

		};
		
		
	return deleteChatty;

})(chatty || {});

