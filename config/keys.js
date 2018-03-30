if (process.env.NODE_ENV === 'production') {
	console.log('Setting prod keys...');
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}
