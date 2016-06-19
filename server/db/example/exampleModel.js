const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
  count: Number,
  name: String
});

module.exports = mongoose.model('example', ExampleSchema);