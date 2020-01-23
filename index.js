const express = require('express')
const app = express()
const port = 3030
const cors = require('cors')
app.use(cors())
app.use(express.json())

const {router} = require('./config/routes')
const {configureDB} = require('./config/database')

configureDB()
app.use('/', router)

app.listen(port, function()
{
    console.log('Listening to port', port)
})