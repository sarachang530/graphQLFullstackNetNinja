const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

//we are making a model, refers to collection in DB, 'Books' is the name of collection
//bookSchema is obj of how it will look
module.exports = mongoose.model('Book', bookSchema);
