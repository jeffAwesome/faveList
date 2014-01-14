module.exports = {
	development: {
		db: 'mongodb://favelistawesomeer:radicalbinocularskazoo@ds061258.mongolab.com:61258/favelist',
		app: {
			name: 'FaveList'
		},
		facebook: {
			clientID: 1377040429223933,
			clientSecret: "7f89d8194144c43926e4ce396928a9c3",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		}
	},
  	production: {
    	db: 'mongodb://favelistawesomeer:radicalbinocularskazoo@ds061258.mongolab.com:61258/favelist',
		app: {
			name: 'FaveList'
		},
		facebook: {
			clientID: 1377040429223933,
			clientSecret: "7f89d8194144c43926e4ce396928a9c3",
			callbackURL: "http://localhost:3000/auth/facebook/callback"
		}
 	}
}
