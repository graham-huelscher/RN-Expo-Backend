const multer = require('multer')
const storage = multer.memoryStorage();
const path = require('path')
const Datauri = require('datauri');
const dUri = new Datauri();

const dataUri = (originalname, buffer) => dUri.format(path.extname(originalname).toString(), buffer);

const multerUploads = multer({ storage })

  module.exports = {dataUri, multerUploads}
