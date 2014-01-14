var mongoose = require('mongoose'), 
    List = mongoose.model('List');

exports.index = function(req, res, next){

}


exports.create = function ( req, res){
	new List({
    	name    : req.body.name,
    	user_id : req.user
  	}).save( function( err, list, count ){
    	res.redirect( '/profile' );
  	});
};

exports.addItems = function (req, res){
	List.findById( req.params.list_id, function ( err, list ){
		var listItem = req.body.itemName;
		list.items.push(listItem);
    	list.save( function ( err, list, count ){
        	res.redirect( '/profile' );
    	});
	});
};

