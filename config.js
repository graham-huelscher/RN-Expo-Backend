const multer = require('multer')
const storage = multer.memoryStorage();
const path = require('path')
const Datauri = require('datauri');
const dUri = new Datauri();

const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

const multerUploads = multer({ storage })

  module.exports = {dataUri, multerUploads}
