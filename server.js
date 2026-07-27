require("dotenv").config()
const cors = require('cors')
const express = require('express')
const app = express()
const connectDb = require('./config/database')

const ports = process.env.PORT || 3000
app.use(express.json())

app.use(cors({

    origin: "http://localhost:5173",
    credentials: true

}))

app.use('/api/auth',require('./routes/loginRoutes'))

connectDb()

app.listen(ports, ()=> {
    console.log(`Sistem Berjalan Di Port ${ports}`)
})