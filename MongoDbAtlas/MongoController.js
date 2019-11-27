const mongoose = require('./MongoConfig')
const Photo = require('./schemas/Photo')

const MongoController = {
    addToDb: async (photo, location) => {
        const photoObj = {
            public_id: photo.public_id,
            securePhotoUrl: photo.secure_url,
            likes: 0,
            currentRadius: 25,
            location: {
                coordinates: [location.coords.longitude, location.coords.latitude]
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