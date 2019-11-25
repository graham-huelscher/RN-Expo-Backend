const express = require('express')
const router = express.Router()
const { dataUri, multerUploads } = require('../config')

const CloudinaryController = require('../Cloudinary/CloudinaryController')
const MongoController = require('../MongoDbAtlas/MongoController')


router.post('/', multerUploads.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'location', maxCount: 1 }
  ]), async (req, res, next) => {

    const location = JSON.parse(req.body.location)
    const photo = req.files['photo'][0]
    const file = dataUri(photo.originalname, photo.buffer).content;

    const cloudinaryResponse = await CloudinaryController.uploadPhoto(file)
    console.log(cloudinaryResponse)
    res.json('post response')
})

router.get('/', async (req, res) => {
    res.json(await MongoController.getPhotos())
})

module.exports = router