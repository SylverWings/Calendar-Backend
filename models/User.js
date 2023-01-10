const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        uniqued: true
    },
    password: {
        type: String,
        required: true
    }
},  {
    timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;