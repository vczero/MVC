/*
 * Dom Util
 * 
 * */
(function(exports){
	var Dom;
	//根据元素id获取元素
	var getElement = function(elId){
		return typeof elId === 'string' ? document.getElementById(elId) : elId;
	};
	//根据元素名称获取元素
	var getElementsByTagName = function(elName){
		return typeof elName === 'string' ? document.getElementByTagName(elName) : elName;
	};
	//获取元素
	var get = function(el){
		if(typeof el ==== 'string'){
			if(el.indexOf('#') > -1){
				return getElement(el.substring(1, el.length));
			}else{
				return getElementsByTagName(el.substring(0, el.length));
			}
		}else{
			return;
		}	
	};
	//获取元素的样式
	var getStyle = function(el, style){
		//IE el.currentStyle
		var value = el.style[style] || (el.currentStyle && el.currentStyle[style]);
		//FF defaultView
		if ((!value || value === 'auto') && document.defaultView) {
			var css = document.defaultView.getComputedStyle(el, null);
			value = css ? css[style] : null;
		}
		return value === 'auto' ? null : value;
	};
	
	
	//暴露Dom接口
	exports.Dom = {
		get: get
	};
	
})(window);
