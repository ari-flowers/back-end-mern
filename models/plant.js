const mongoose = require('mongoose')

const plantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  species: {
    type: String,
    default: 'unknown',
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  tags: [String]
}, {timestamps: true})

module.exports = mongoose.model('Plant', plantSchema)
