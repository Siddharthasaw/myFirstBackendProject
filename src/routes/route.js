const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
/*
Q-1: Create an API for GET /movies that returns a list of movies.
 Define an array of movies in your code and 
return the value in response.
*/
router.get('/movies', function (req,res){
    
    const arry=["Gumnami","Udham Sing","border","URI"]
    res.send(arry)
})

  /*
  Q-2: Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request
   and it should return the movie in your array at index 1). 
  You can define an array of movies again in your api
  */
router.get('/movies/:index', function (req,res){
     let myParams = req.params
     console.log(myParams)
     const arry=["Gumnami","Udham Sing","border","URI"]
     if(myParams.index>(arry.length-1)){
        res.send("right valid")
     }
    
    
    res.send(arry[myParams.index])
})

/*
 Q-3: Handle a scenario in problem 2 where if the index is greater than the valid maximum
 value a message is returned that
 tells the user to use a valid index in an error message.
*/
router.get('/films', function (req,res){
    
    const filmss=[ {
        id: 1,
        name: "The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]
       
    res.send(filmss)
})
/*
Q-4: Write another api called GET /films. Instead of an array of strings define an array of 
movie objects this time. Each movie object should have values - id, name. An example of movies array is 
*/

router.get('/films/:id', function (req,res){

    let idParam=req.params
    
    const filmss=[ {
        id: 1,
        name: "The Shining"
       },
        {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]

       
       if(idParam.id>(filmss.length+1)||idParam.id==0){
        res.send("not valid")
        
    }      
       //problem 5
       
       for(i of filmss){

       
        
        
        if(i.id==idParam.id){
            console.log(i)
            res.send(i.name)
        }
       }
        // res.send("enter valid")
       


    //    console.log(idParam)
       
    // res.send(idParam.name)
})

module.exports = router;