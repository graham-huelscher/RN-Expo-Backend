const express = require('express')
const router = express.Router()
const { dataUri, multerUploads } = require('../config')

const CloudinaryController = require('../Cloudinary/CloudinaryController')


router.post('/', multerUploads.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'location', maxCount: 1 }
  ]), async (req, res, next) => {

    const location = JSON.parse(req.body.location)
    console.log(req.files)
    console.log(location)
    const photo = req.files['photo'][0]
    const file = dataUri(photo.originalname, photo.buffer).content;
    res.json(await CloudinaryController.uploadPhoto(file))
})

router.get('/', async (req, res) => {
    res.json(await CloudinaryController.getPhoto())
})

module.exports = router