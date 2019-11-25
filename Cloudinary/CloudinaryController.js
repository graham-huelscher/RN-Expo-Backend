const cloudinary = require('./CloudinaryConfig')

const CloudinaryController = {
    uploadPhoto: async (photo) => {
        let result = 400
        try {
            result = await cloudinary.uploader.upload(photo)

        } catch (error) {
            result = error
        }
        return (result)
    }
}

module.exports = CloudinaryController