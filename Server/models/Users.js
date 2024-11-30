const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

// Create the model
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
