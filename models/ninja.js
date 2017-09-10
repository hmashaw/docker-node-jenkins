/**
 * 
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema is a 'part of' a model - I like to say the 'soul'
const PointSchema = new Schema ({
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], index: '2dsphere' }
})

const NinjaSchema = new Schema({
    email: {
        type: String,
        required: [true, 'email is required']
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: PointSchema
})

// Model represents the collection in MongoDB
const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja

