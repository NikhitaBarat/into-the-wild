const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// app configuration
const app = express()
dotenv.config()
const PORT = process.env.PORT | 4000

// middleware
app.use(express.json())
app.use(cors())


// routes
app.get('/', (req, res) =>{
    res.status(200).send('Server is running')
})


app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})