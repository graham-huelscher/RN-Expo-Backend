const express = require('express')
const router = express.Router()
const { dataUri, multerUploads } = require('../config')

const CloudinaryController = require('../Cloudinary/CloudinaryController')


router.post('/', multerUploads.single('photo'), async (req, res, next) => {

    console.log(req.file)
    const file = dataUri(req).content;
    res.json(await CloudinaryController.uploadPhoto(file))
})

router.get('/', async (req, res) => {
    res.json(await CloudinaryController.getPhoto())
})

module.exports = router