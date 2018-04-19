module.exports = {
	google: {
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET
	},
	mlab: {
		dbURI: process.env.MLAB_DB_URI
	},
	cookieKey: process.env.COOKIE_KEY,
	stripe: {
		publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
		secretKey: process.env.STRIPE_SECRET_KEY
	}
};
