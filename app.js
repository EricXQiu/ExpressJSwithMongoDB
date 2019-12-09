const mongoose = require('mongoose');
const User = require('./models/User');

const express = require('express');

mongoose.Promise = global.Promise;

const app = express();

app.get('/', (request, response) => {
    response.send('ROOT');
});

app.post('/users', (request, response) => {
    const newUser = new User({
        firstName: 'Mary',
        lastName: 'Cool',
        isActive: 1,

    });

    newUser.save().then(savedUser => {
        console.log('saved user');
    });

    response.send('User saved');
});

// mongoose.connect('mongodb://localhost:27017/mongoose');
// mongoose.connection
//     .once('open', () => console.log('DB is CONNECTED!'))
//     .on('error', error => {
//         console.log('Could not connect to MongoDB', error);
//     });
//



// newUser.save(function (error, dataSaved) {
//     if (error) return console.log(error.message);
//
//     console.log(dataSaved);
// });

const port = 8800 || process.env.PORT;
app.listen(port, () => {
    console.log(`The app is listening on port ${port}!`);
});
