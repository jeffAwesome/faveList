Fave = {
	start: function() {
		new Fave.CreateView()
	}
}

/* Create a view for the create button */

Fave.CreateView = Backbone.View.extend({
	el: '#createItem',
	events: {
		'keypress': 'handleEnter'
	},
	initialize: function() {
		$(this.el).focus();
		console.log('were loading');
	},

	handleEnter: function(e) {
		if(e.keyCode == 13) {
			
		}
	}
});

/* The plan will be to add items through backbone... such as the
	item menu on the left hand side... when you click one of those
	your items will pop up. Along with a form to add a new item.
*/