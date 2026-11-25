const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  statusBadgeClass: {
    type: String,
    default: 'bg-blue-100 text-blue-700',
  },
  problem: {
    type: String,
    required: true,
  },
  contribution: {
    type: String,
    required: true,
  },
  technologies: [String],
  repoUrl: {
    type: String,
  },
  tag: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Project', projectSchema);

