const express = require('express');
const router = express.Router();
const x = require('lodash')
const missing_number =require('../solution/solution1')



router.get('/soluctionOne', function(req,res){
res.send("the missing number is "+  missing_number.missNumber())
});

router.get('/soluctionTwo', function(req,res){
    res.send("the missing number is "+  missing_number.missedNumber())
    });


module.exports = router;

