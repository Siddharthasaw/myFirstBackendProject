const { ObjectId } = require("bson")
const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const BlogsSchema = new mongoose.Schema({

     title:
     {
        type:String,
        required: true
     },
   
     body:
     {
        type:String,
        required: true
     },

     authorId:
     {
        type: ObjectId,
        ref:"author",
        required:true
     },

      tags:
     {
        type:String,
        required: true
     },

      category:
      {
       type:String,
       required:true
      },

        subCategory:
        {
          type: [String],
          required:true           
            
        },

      isDeleted:
      {
        typr:Boolean,
        default: false
      },

      isPublished:
      {
        typr:Boolean,
        default: false
      },

      deleteAt:
      {
         type: Date,
         default:null
      },

      publishAt:
      {
         type:Date,
         default:null
      },
   
     },

  {timestamps: true}
)

module.exports = mongoose.model("Blogss",BlogsSchema )