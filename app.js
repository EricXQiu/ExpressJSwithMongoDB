const mongoose = require('mongoose');
const User = require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/mongoose');
mongoose.connection
    .once('open', () => console.log('DB is CONNECTED!'))
    .on('error', error => {
        console.log('Could not connect to MongoDB', error);
    });

mongoose.Promise = global.Promise;

app.get('/', (request, response) => {
    response.send('ROOT');
});

app.post('/users', (request, response) => {
    const newUser = new User({
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        isActive: request.body.isActive
    });

    newUser.save().then(savedUser => {
        console.log('saved user');
        response.status(201).send("USER SAVED!");
    }).catch(error => {
        console.log(error.message);
        response.status(404).send("USER NOT SAVED!");
    });
});

app.get('/users', (request, response) => {
    User.find({}).then(users => {
        response.status(200).send(users);
    })
});

app.patch('/users/:id', (request, response) => {
    const id = request.params.id;
    const firstName = request.body.firstName;

    User.findByIdAndUpdate(
        id,
        {$set: {firstName: firstName}},
        {new: true})
        .then(savedUser => {
            response.status(200).send('User is Modified!' + savedUser);
        });
});

app.put('/users/:id', (request, response) => {
    const id = request.params.id;
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const isActive = request.body.isActive;

    User.findOne({_id: id}).then(user => {
        user.firstName = firstName;
        user.lastName = lastName;
        user.isActive = isActive;

        user.save()
            .then(userSaved => {
                response.status(201).send('User is saved!\n' + userSaved);
            })
            .catch(error => {
                response.status(404).send('ERROR, data is not saved!');
            });
    })
});

// app.put('/users/:id', (request, response) => {
//     const id = request.params.id;
//     const firstName = request.body.firstName;
//     const lastName = request.body.lastName;
//     const isActive = request.body.isActive;
//
//     User.findByIdAndUpdate(id,
//         {$set:
//                 {
//                     firstName: firstName,
//                     lastName: lastName,
//                     isActive: isActive
//                 }
//         })
//         .then(savedUser => {
//             console.log('PUT operation finished!' + savedUser);
//             response.status(200).send("The user is PUT in mongoDB!");
//         })
//         .catch(error => {
//             response.status(404).send(error.message);
//         });
// });

const port = 8800 || process.env.PORT;
app.listen(port, () => {
    console.log(`The app is listening on port ${port}!`);
});
