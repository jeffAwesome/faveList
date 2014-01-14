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

var the_item;


var Item = Backbone.Model.extend({

});

var Favorite = Backbone.Collection.extend({
	model: Item
});

var ItemView = Backbone.View.extend({
	tagName: "article",
    className: "favorite-container",
    template: $("#FavoriteTemplate").html(),
 
    render: function () {
        var tmpl = _.template(this.template);
 
        this.$el.html(tmpl(this.model.toJSON()));
        return this;
    } 
});


var FavoriteView = Backbone.View.extend({
	el: $("#favoriteItem"),
	initialize: function() {
		this.collection = new Favorite(the_item);
		this.render();
	},
	render: function() {
		var that = this;
		_.each(this.collection.models, function (the_item) {
			that.renderFavorite(the_item);
		}, this)
	},

	renderFavorite: function (the_item) {
		var itemView = new ItemView({
			model: the_item
		});
		/* Empty out the placeholder before displaying new data set */
		this.$el.empty();
		this.$el.append(itemView.render().el);
	}
});

$("#favorites-list ul a").on("click", function(e) {
	e.preventDefault();
	var the_response;
	var the_attr = $(this).attr("data-ajax");

	$.getJSON( the_attr, function(data) { the_item = data; console.log(data); the_response = data; var the_favorite = new FavoriteView(); });

});


