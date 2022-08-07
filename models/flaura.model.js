const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter title']
    },
    description: {
        type: String,
        required: [true, 'Please enter description']
    },
    imageurl: String,
    location: {
        type: String,
        required: [true, 'Please enter origin']
    },
    country: String
}, 
{
    timestamps: true 
})

module.exports = mongoose.model('intowildplants', PlantSchema);