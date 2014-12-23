var Test = Hug.Class.extend({
	initialize: function(name, age){
		console.log(name + '--' + age);
		this.name = name;
		this.age = age;
	},
	statics: {
		sName: 'wlh',
		sFunction: function(){
			console.log(Test.sName);
		}
	},
	includes: {
		getName: function(){
			console.log(this.name);
		},
		setAge: function(age){
			this.age = age;
			console.log(this.age);
		}
	}
});

var t = new Test('鬼谣', 20);
t.getName();
t.setAge(100);
Test.sFunction();
