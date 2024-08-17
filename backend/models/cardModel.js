const mongoose = require('mongoose');
const { link } = require('../routes/cardRoutes');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link:{ type: String, required: true }
});

module.exports = mongoose.model('Card', cardSchema);
