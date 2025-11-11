const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id:{
        type: String,
        requried: true
    },
    name:{
        type: String,
        requried: true
    },
    age:{
        type:Number,
        requried: true
    },
    createdOn:{
        type: Date,
        requried: Date.now
    },
    
})


module.exports = mongoose.model("User",userSchema)