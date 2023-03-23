const mongoose = require('mongoose');

// set up either development or production database connection string
let dbConnectionString = "mongodb://127.0.0.1:27017/todo";
if (process.env.NODE_ENV === 'production') {
    dbConnectionString = process.env.MONGODB_PRODUCTION_URI;
}

mongoose.connect(dbConnectionString);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
});

// handle closing the database connection on process termination
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('Mongoose disconnected');
    process.exit(0);
});

require('./todo')