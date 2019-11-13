const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.cloudinaryCloudName, 
    api_key: process.env.cloudinaryApiKey, 
    api_secret: process.env.cloudinaryApiSecret
  });

const CloudinaryController = {
    uploadPhoto: async (photo)=>{
        cloudinary.uploader.upload("../C6rXKBBV0AAYjrV.jpg", (error, result) => {
            console.log(result, error)
        })
        return ("you made it")
    },
    getPhoto: async () => {
        const response = cloudinary.url("sample.jpg", {quality: "auto", fetch_format: "auto"})
        return response

    }
}

module.exports = CloudinaryController