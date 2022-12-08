const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    symbol:
     { 
        type: String
     },

    name: 
    {
      type: String
    },

    marketCapUsd:
     {
        type:String
     },

    priceUsd:
    {
      type:String
    },

},{timestamp:true})


module.exports = mongoose.model('crypto',cryptoSchema)