const mongoose = require('./MongoConfig')
const Photo = require('./schemas/Photo')

const MongoController = {
    addToDb: async (photo, location) => {
        console.log(photo, location)
        const photoObj = {
            public_id: photo.public_id,
            securePhotoUrl: photo.secure_url,
            likes: 0,
            currentRadius: 25,
            location: {
                coordinates: [location.coords.longitude, location.coords.latitude]
            }  
        }
        console.log(photoObj)
          // const photoObj = {
        //     public_id: 'anopther test',
        //     securePhotoUrl: 'https://res.cloudinary.com/dyngvch1b/image/upload/v1574259987/gq4hd6fg7qsaeum3kc5h.png',
        //     likes: 534,
        //     currentRadius: 25,
        //     location: {
        //         coordinates: [-122.914141, 49.206341]
        //     }  
        // }
        const newPhoto = new Photo(photoObj)
        try {
            await newPhoto.save()
            console.log('attempting to save')
            return { result: true }
        } 
        catch (err) {
            console.log('error thrown')
            return { result: false, err }
        }
    },
    getPhotos: async () => {
        
        const query = Photo.find()
        return await query.where('location').near({ center: [-122, 49], maxDistance: 25000, spherical: true });
    }
}

module.exports = MongoController