const mongoose = require('mongoose');
const {User} = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', () => console.log('DB is CONNECTED!'))
    .on('error', error => {
        console.log('Could not connect to MongoDB', error);
    });

const newUser = new User({
    firstName: 'Eric',
    lastName: 'Phoenix',
    isActive: 1,

});

newUser.save(function (error, dataSaved) {
    if (error) return console.log(error.message);

    console.log(dataSaved);
});
