const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const contactsSchema = new Schema({
    name : {
        type : String,
        required : true,
        unique : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value)
            },
            message : function()
            {
                return 'Invalid email format'
            }
        }
    },
    mobile : {
        type : String,
        required : true,
        unique : true,
        minlength : 10,
        maxlength : 10
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

const Contact = mongoose.model('Contact', contactsSchema)
module.exports = {
    Contact
}