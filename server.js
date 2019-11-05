const express = require('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const PhotoRoutes = require('./Photo/PhotoRoutes')

// Middleware
app.use(express.json());

app.get('/test', (req, res) => {
  console.log("test hit")
    res.send("This should be returned")
})

app.use('/api/photos', PhotoRoutes)

//Catch-all
app.get('*', (req, res) => {
  res.json("This is not the path you are looking for.")
})


// Server Initialize
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})