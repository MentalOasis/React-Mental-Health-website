
const mongoose = require('mongoose');

const { Schema } = mongoose;
 
const userSchema = new Schema({

    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    score: {
        type: Number,
        default: 0 // Puntaje inicial será cero
    }

});
 
const UserModel = mongoose.model('User', userSchema);
 
module.exports = UserModel;
