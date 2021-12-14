const express = require('express')
const cors = require('cors')
const router = require('./routes/appRouter')
require('dotenv').config() // to use .env variables
require('./db/connectDB')

const app = express()

// App route
app.use('/api/apps', router)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.use(express.json())
app.use(cors())

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server on port: http://localhost:${port}`)
})
