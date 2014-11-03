window.Hug = window.Hug || {};


Hug.Event = {
	
	/*
	 * add event listener 
	 * */
	on: function(ev, callback){
		var calls = this._callbacks || (this._callbacks = {});
		(this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
		return this;
	},
	
	/*
	 * emit the event listener
	 * 
	 * */
	
	emit: function(){
		var args = Array.prototype.slice.call(arguments, 0);
		var ev = args.shift();
		var list, calls, i, l;
		if(!(calls = this._callbacks)) return this;
		if(!(list = this._callbacks[ev])) return this;
		for( i = 0, l = list.length; i < l; i++){
			list[i].apply(this, args);
		}
		return this;
	}
};






