const mongoose = require('mongoose')

const appSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    projectLink: { type: String, required: true },
    description: { type: String, required: true },
    imageTitle: [
      {
        title: { type: String, required: true },
        image: { type: String, required: true }
      }
    ]
  },
  {
    timestamp: true
  }
)

const Apps = mongoose.model('Apps', appSchema)

module.exports = Apps
