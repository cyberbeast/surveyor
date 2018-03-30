module.exports = {
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: process.env.GOOGLE_CALLBACK_URL
	},
	mlab: {
		dbURI: process.env.MLAB_DB_URI
	},
	cookieKey: process.env.COOKIE_KEY
};
