const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamp: true,
  }
);

module.exports = model('Movie', movieSchema)
