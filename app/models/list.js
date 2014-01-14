var mongoose = require('mongoose');

ListSchema = mongoose.Schema({
	name: String,
	user_id: String,
	items: Array
});

var List = mongoose.model("List", ListSchema);
module.exports = List;