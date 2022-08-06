const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

// app configuration
const app = express()
dotenv.config()
const PORT = process.env.PORT | 4000

// middleware
app.use(express.json())
app.use(cors())


// routes
app.use(express.static(path.join(__dirname, './client/build')))
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

// database connection
const database_connection = () => {
    mongoose.connect(process.env.ATLAS_URI)
        .then(() => console.log('ATLAS CLUSTER is connected'))
        .catch((err) => console.err(err))
    const db = mongoose.connection
    db.once('open', () => {
        console.log('ATLAS database connected')
    })
}

database_connection()


// server running at port 4000
app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})