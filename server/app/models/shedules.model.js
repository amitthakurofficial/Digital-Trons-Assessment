const mongoose = require('mongoose');

const sheduleSchema = mongoose.Schema({
    time : {
        type : String
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId
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

module.exports = mongoose.model('shedule' , sheduleSchema);