const cloudinary = require('./CloudinaryConfig')

const CloudinaryController = {
    uploadPhoto: async (photo) => {
        let result = 400
        try {
            result = await cloudinary.uploader.upload(photo)

        } catch (error) {
            console.log(error)
        }
        return ("you made it")
    },
    getPhoto: async () => {
        const response = cloudinary.url("sample.jpg", { quality: "auto", fetch_format: "auto" })
        return response

    }
}

module.exports = CloudinaryController