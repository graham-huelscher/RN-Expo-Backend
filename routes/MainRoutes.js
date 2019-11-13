require('dotenv').config()
const express = require('express')
const router = express.Router()

const CloudinaryController = require('../Cloudinary/CloudinaryController')


router.post('/', async (req, res) => {
    //res.json(await CloudinaryController.uploadPhoto())
    res.json(await CloudinaryController.uploadPhoto(req.body.photo))
})

router.get('/', async (req, res) => {
    res.json(await CloudinaryController.getPhoto())
})

module.exports = router