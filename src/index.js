const express = require("express")
const mongoose = require("mongoose")
const route = require('./route/route.js');
const app = express()


app.use(express.json())


mongoose.connect("mongodb+srv://Siddharth609:q8PCZ8BpcFz4-nc@cluster0.thktdho.mongodb.net/cryptoAssignment",
 	 { useNewUrlParser: true })
.then(() => console.log("MongoDB is connected"))
.catch((error) => console.log(error))



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
   console.log('Express app running on port ' + (process.env.PORT || 3000))})