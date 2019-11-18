const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.cloudinaryCloudName, 
    api_key: process.env.cloudinaryApiKey, 
    api_secret: process.env.cloudinaryApiSecret
  });

  module.exports = cloudinary;