const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName :
    {
      type: String,
      unique:true,
      required:true

    },
    authorName:
    {
      type: String,
      required:true 
    },
    category:
    {
        type: String,
        required:true
    },
     year:{
     type: String,
     required:true
     },

}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users



// String, Number
// Boolean, Object/json, array