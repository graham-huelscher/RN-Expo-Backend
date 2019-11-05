const express = require('express')
const router = express.Router()
const PhotoController = require('./PhotoController')

router.post('/', async (req, res) => {
    res.json(await PhotoController.uploadPhoto(req.body))
})

module.exports = router