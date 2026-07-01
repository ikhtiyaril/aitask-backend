const express = require('express')
const app = express()
const connectDb = require('./config/database')

const ports = process.env.PORT || 3000


app.use('/api/login',require('./routes/loginRoutes'))

connectDb()
app.listen(ports, ()=> {
    console.log(`Sistem Berjalan Di Port ${ports}`)
})