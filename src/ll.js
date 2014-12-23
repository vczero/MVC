//(1)通用命名空间模式
var FE = {};
FE.Tree = function(branch, des){
	this.branch = branch;
	this.des = des;
}

FE.Person = function(branch, des){
	this.branch = branch;
	this.des = des;
}

Tree.prototype = {
	getNode: function(node){
		//一系列操作
		return node;
	}
};

//为了更加安全，我们修改代码，在创建全局命名空间前，做个判断更好
var FE = FE {};

//那不是每次创建对象需要判断呢
//模块模式
FE.Tree = (function(){
	var name = '';
	var addNode = '';
	return {
		addNode: addNode
	};
})();

