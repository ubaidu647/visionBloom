const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    packageName:{
        type: String
    },
    name:{
        type: String
    },
    email:{
        type: String
    },
    mobileNumber:{
        type: Number
    },
    message:{
        type: String
    },
     price:{
        type: String
    },
},
    {
        timestamps: true
    });


module.exports = mongoose.model('User', userSchema)