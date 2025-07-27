const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

// Corrected this line — apply the plugin to userSchema, not undefined variable
userSchema.plugin(passportLocalMongoose);

// Export the User model using the userSchema
module.exports = mongoose.model('User', userSchema);
