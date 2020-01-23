const mongoose = require('mongoose')
const configureDB = function()
{
    mongoose.connect('mongodb://localhost:27017/contact-manager', {useNewUrlParser:true, useUnifiedTopology:true})
    .then(function()
    {
        console.log('connected to database')
    })
    .catch(function(err)
    {
        console.log(err)
    })
}

module.exports = {
    configureDB
}