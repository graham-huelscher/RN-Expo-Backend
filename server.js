require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || process.argv[2] || 8080
const MainRoutes = require('./routes/MainRoutes')

// Middleware
app.use(bodyParser.json())

app.use('/api/photos', MainRoutes)

//Catch-all
app.get('*', (req, res) => {
  res.json('This is not the endpoint you are looking for')
})


// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})