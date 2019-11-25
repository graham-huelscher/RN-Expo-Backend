const mongoose = require('./MongoConfig')
const Photo = require('./schemas/Photo')

const MongoController = {
    addToDb: async (photo) => {
        const photoObj = {
            public_id: 'anopther test',
            securePhotoUrl: 'https://res.cloudinary.com/dyngvch1b/image/upload/v1574259987/gq4hd6fg7qsaeum3kc5h.png',
            likes: 534,
            currentRadius: 25,
            location: {
                coordinates: [-122.914141, 49.206341]
            }
        }
        const newPhoto = new Photo(photoObj)
        try {
            await newPhoto.save()
            return { result: true }
        } 
        catch (err) {
            return { result: false, err }
        }
    },
    getPhotos: async () => {
        
        const query = Photo.find()
        return await query.where('location').near({ center: [-122, 49], maxDistance: 25000, spherical: true });
    }
}

module.exports = MongoController