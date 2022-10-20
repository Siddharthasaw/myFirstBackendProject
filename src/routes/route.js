
const express = require('express');
const router = express.Router();
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC WILL COME HERE
       let newPlayer = req.body
       let playerExists=players.find(x =>x.name===newPlayer.name)
       if(playerExists){
       res.send('Player name already exists')
       }
       else{
   
           players.push(newPlayer)
    
           res.send({newPlayers:players})
       }
           
       });
 
       
  
module.exports = router;