const express = require('express');
const router = express.Router();
const axios = require("axios");
const cryptoController = require("../Controller/cryptoController")
const cryptoModel = require('../model/cryptoModel');


router.get("/assets",cryptoController.crypto)
  
module.exports = router;