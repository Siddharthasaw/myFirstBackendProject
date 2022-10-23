const booksModel= require("../bookSchema/books")

const createbookslibrery= async function (req, res) {
    let data= req.body
    let savedData= await booksModel.create(data)
    res.send({msg: savedData})
}

const getbooksLibreryData= async function (req, res) {
    let allbooks= await booksModel.find()
    res.send({msg: allbooks})
}

/*const updateUser = async function (req, res)
{
    const data = {
        $set: {
            firstName:"Sidd",
            lastName:"Saw",
        },
    };
    //let data= req.body
    let savedData= await UserModel.updateOne({mobile:"8116934609"},data)
    res.send({msg: savedData})
}*/


module.exports.createbookslibrery= createbookslibrery
module.exports.getbooksLibreryData= getbooksLibreryData
//module.exports.updateUser=updateUser