const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    mobileNumber : {
        type : String
    },
    createdAt : {
        type : Date,
        default : function() {
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : function() {
            return Date.now();
        }
    }
})

module.exports = mongoose.model('user' , userSchema);