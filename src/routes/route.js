const express = require('express');
const router = express.Router();
const booksModel= require("../bookSchema/books.js")
const booksController= require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createbooks", booksController.createbookslibrery)

router.get("/getbooksData", booksController.getbooksLibreryData)

//router.post("/updateuser", UserController.updateUser  )

module.exports = router;