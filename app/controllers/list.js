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
    var listId = req.params.list_id
		list.items.push(listItem);
    	list.save( function ( err, list, count ){
        	res.redirect( '/fave/'+listId );
    	});
	});
};


exports.fave = function(req, res){ 
  List.findById( req.params.id, function ( err, list ){
    if( err ) {
            res.json('No Found Item');
    } else {
      res.render('fave', {
        user: req.user,
        id: list.id,
        name: list.name,
        items: list.items
      });
    }
  });
};

exports.faveJson = function(req, res){ 
  List.findById( req.params.id, function ( err, list ){
    if( err ) {
            res.json('Error');
    } else {
      res.json({
        user: req.user,
        id: list.id,
        name: list.name,
        items: list.items
      });
    }
  });
};


