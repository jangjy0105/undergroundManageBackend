const mongoose = require('mongoose');
// const { Tags } = require('./tags');

const movieSchema = new mongoose.Schema({
  title: {type: String},
  summary: {type: String},
  rating: {type: String},
  runningtime: {type: Number},
  directors: [
    {type: String}
  ],
  scenarios: [
    {type: String}
  ],
  actors: [
    {type: String}
  ],
  genres: [
    {type: String}
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags"
    }
  ],
  video: {type: String},
  poster: {type: String},
  subtitle: {type: String},
  specialNote: {type: String},
  date: {
    type: Date,
    default: Date.now
  },
  view: {type: Number},
  comments: [
    {type: String}
  ],
  scores: [
    {
      user: {type: String},
      score: {type: Number},
      date: {type: Date}
    }
  ],
  avgScore:{type: Number}
})

const Movies = mongoose.model('movies', movieSchema);

module.exports = {Movies}