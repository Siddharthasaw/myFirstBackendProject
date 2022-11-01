const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMiddleware =require("../middlewares/commonMiddlewares")

router.get("/getMiddlewqare",commonMiddleware.mid1,UserController.basicCode)

module.exports = router;


