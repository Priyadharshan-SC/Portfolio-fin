const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: [String],
  book: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  edition: {
    type: String,
    default: 'First edition',
  },
  type: {
    type: String,
    default: 'Published Book Chapter',
  },
  doi: {
    type: String,
    required: true,
  },
  doiUrl: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  repoUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Publication', publicationSchema);

