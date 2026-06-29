const express = require('express')
const app = express()

const ports = process.env.PORT || 3000

app.listen(ports, ()=> {
    console.log(`Sistem Berjalan Di Port ${ports}`)
})