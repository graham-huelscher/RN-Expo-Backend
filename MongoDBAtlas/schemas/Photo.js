const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const PhotoSchema = new Schema({
    public_id: {
        type: String,
        required: true,
        unique: true
    },
    securePhotoUrl: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    currentRadius: {
        type: Number,
        required: true,
        default: 5
    },
    location: {
        type: {
            type: String, 
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    timePosted: {
        type: Date,
        default: Date.now
    }
});

PhotoSchema.index({ location: "2dsphere" });

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;