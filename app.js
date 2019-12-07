const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (error, client) {
    if (error) throw error;

    // const objectId = new ObjectId();
    // console.log(objectId);

    const db = client.db('animals');

    // db.collection('mammals').insertOne({name: 'shinning hopper', legs: 6});

    // delete document
    // db.collection('mammals').deleteOne({name: 'fish'});
    // db.collection('mammals').deleteOne({name: 'shinning hopper'});

    // fetch data
    db.collection('mammals').findOne({
        name: 'shinning assault hopper'
    }).then(result => {
        if (error) throw error;
        console.log(result);
    }).catch(error => {
        console.log(error);
    });

    // db.collection('mammals').find().toArray((error, result) => {
    //     if (error) throw error;
    //
    //     console.log(result);
    // });

    // insert data
    // db.collection('mammals').insertOne({
    //     name: 'fish',
    //     legs: 0
    //
    // }, (error, result) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //
    //     console.log('INSERTED INTO THE DB');
    // });

    // update data
//     db.collection('mammals').findOneAndUpdate({
//         _id: new ObjectId('5deb23458a8a4d879087664e'),
//     }, {
//         $set: {
//             name: 'shinning hopper'
//         }
//     }).then(result => {
//         console.log(result);
//     }).catch(error => {
//             console.log(error);
//         });
//
//     console.log('CONNECTED');
// });


// const mongoose = require('mongoose');
//
// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose.connection
//     .once('open', () => console.log('CONNECTED!'))
//     .on('error', (error) => {console.log('CONNECTION ERROR OCCURS!', error)});
});

