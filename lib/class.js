var Hug = {};
Hug.Class = {};
Hug.Class.extend = function(obj){
	var newObj = function(){
		if(obj.initialize){
			obj.initialize.apply(this, arguments);
		}
	};
	
	//增加静态方法
	if(obj.statics){
		Hug.extend(newObj, obj.statics);
		delete obj.statics;
	}
	//增加原型
	if(obj.includes){
		Hug.extend(newObj.prototype, obj.includes);
		delete obj.includes;
	}
	return newObj;
};

// extend(obj, param1, param2...)
Hug.extend = function(dest){
	var sources = Array.prototype.slice.call(arguments, 1);
	for (var j = 0, len = sources.length, src; j < len; j++) {
		src = sources[j] || {};
		for (var i in src) {
			if (src.hasOwnProperty(i)) {
				dest[i] = src[i];
			}
		}
	}
	return dest;
};





























