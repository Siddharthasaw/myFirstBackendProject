const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    bookName:
    {
        type:String,
        required:true
    },

    authorName:
    {
        type:String,
        required:true
    },

    tags: [String],

    year: {type: Number,default: 2021,},

    prices: 
    {  
        indianPrice: String,
        europePrice: String,
    },

    totalPages: {  type: Number,required: true,},

    stockAvailable: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("book", bookSchema); 

