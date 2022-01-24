const mongoose = require('mongoose');

const mongoDbURI = 'please put the mongodb url here';
const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
};
mongoose.connect(mongoDbURI, options);

mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection');
});

mongoose.connection.on('error', (err) => {
	console.log(`Mongoose default connection has occured ${err} error`);
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose default connection is disconnected due to application termination');
		process.exit(0);
	});
});
