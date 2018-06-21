var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const options = {
  useMongoClient: true,
  //promiseLibrary: bluebird,
  // autoIndex: false, // Don't build indexes
  // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  // reconnectInterval: 500, // Reconnect every 500ms
  // poolSize: 10, // Maintain up to 10 socket connections
  // // If not connected, return errors immediately rather than waiting for reconnect
  // bufferMaxEntries: 0
};

mongoose.connect(process.env.MONGODB_URI, options)
  .then(connection => {
    console.log("successfully connected to db");
  })
  .catch(e => {
    console.log("Error in db connection", e.message);
  });


module.exports = {
  mongoose
};