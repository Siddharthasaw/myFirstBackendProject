
const basicCode= async function(req, res) 
{
   console.log(req.url)
   console.log("hii i am path of this url "+req.path)
   res.send({msg:"this is comming from controller handler"})

}
module.exports.basicCode=basicCode



















const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode