var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String },
    username: { type: String, required: true },
    email: {
        type: String,
        lowercase: true,
        index: true
    },
    gender: { type: String, enum: ['Male', 'Undisclosed', 'Female', 'Other'], default: "Undisclosed", required: true },
    status: {
        type: Number,
        default: 1
    },
    role: {
        type: String,
        default: 'user'
    },
    password: { type: String, required: true },
    created_date: { type: Date, default: Date.now, index: true }
})

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
    console.log(bcrypt.compareSync(password, this.password));
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', UserSchema);
module.exports = User;