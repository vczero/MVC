
Hug.Event = function(){
	on: function(instance, eventName, callback){
		if(!instance._events){
			instance._events = {};
		}
		if(!instance._events.hasOwnProperty(eventName)){
			return;
		}else{
			instance._events.eventName = callback;
		}
	},
	
	emit: function(){
		
	}
};
