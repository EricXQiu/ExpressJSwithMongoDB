const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },

    lastName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },

    isActive: {
        type: Number,
        default: 0
    }
});

// const User = mongoose.model('users', {
//     firstName: {
//         type: String,
//         required: true,
//         minlength: 3,
//         trim: true
//     },
//
//     lastName: {
//         type: String,
//         required: true,
//         minlength: 3,
//         trim: true
//     },
//
//     isActive: {
//         type: Number,
//         default: 0,
//
//     }
// });

// module.exports = {User};
module.exports = mongoose.model('users', UserSchema);

