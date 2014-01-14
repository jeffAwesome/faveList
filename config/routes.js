var User = require('../app/models/user');
var Auth = require('./middlewares/authorization.js');
var List = require('../app/controllers/list.js');
var ListMod = require('../app/models/list.js');

module.exports = function(app, passport){
	app.get("/", function(req, res){ 
		if(req.isAuthenticated()){
		  res.render("home", { user : req.user}); 
		}else{
			res.render("home", { user : null});
		}
	});


	app.get("/signup", function (req, res) {
		res.render("home");
	});

	app.get("/login", function(req, res) {
		res.render("home");
	});

	app.post("/signup", Auth.userExist, function (req, res, next) {
		User.signup(req.body.email, req.body.password, function(err, user){
			if(err) throw err;
			req.login(user, function(err){
				if(err) return next(err);
				return res.redirect("profile");
			});
		});
	});

	app.get("/auth/facebook", passport.authenticate("facebook",{ scope : "email"}));
	app.get("/auth/facebook/callback", 
		passport.authenticate("facebook",{ failureRedirect: '/login'}),
		function(req,res){
			res.redirect("profile");
		}

	);


	app.get("/profile", Auth.isAuthenticated , function(req, res){ 
		

 
  		ListMod.find({ user_id : req.user}).exec( function ( err, lists ){
      		if( err ) {
      			res.render("profile", { user : req.user});
      		} else {
      			res.render( 'profile', {
			      user : req.user,
			      lists : lists
			    });
      		}
    	});



	});

	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	app.post( '/create', List.create );

	app.post( '/addItems/:list_id', List.addItems );

	app.get("/fave/:id", Auth.isAuthenticated, List.fave );

	app.get("/fave/:id/json", Auth.isAuthenticated, List.faveJson );

}