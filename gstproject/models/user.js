var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    middlename : {
        type : String
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model('User',UserSchema);