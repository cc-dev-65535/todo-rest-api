const mongoose = require('mongoose');

// set up local or production development database connection string
const dbConnectionString = "mongodb://localhost:27017/todo";
if (process.env.NODE_ENV === 'production') {
    dbConnectionString = process.env.MONGODB_URI;
}

mongoose.connect(dbConnectionString);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected`);
});

// handle closing the database connection on process termination
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose disconnected');
      process.exit(0);
    });
});