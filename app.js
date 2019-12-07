var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function (error, db) {
    if (error) throw error;

    console.log('CONNECTED');
});
