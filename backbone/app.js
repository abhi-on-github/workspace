var Model1 = Backbone.Model.extends({

	initialize: function(attrs, opts) {
		console.log('created an instance of model1')
	}
	
});



var m1 = new Model1({ name:'m1' });
console.log(m1.get('name'));

