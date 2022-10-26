const BookModel= require("../models/bookModel")

const createBook= async function (req, res) 
{
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
};

const getBooksData= async function (req, res) 
{
  let allBooks= await BookModel.find( )
  res.send({msg: allBooks})
};

const bookList = async function (req, res) 
{
    let allBookNameAuthor = await BookModel.find().select({bookName: 1,authorName: 1, _id: 0,});
    res.send({ msg: allBookNameAuthor });
};

const getBooksInYear = async function (req, res)
{
  let yearr = req.query.year;
  console.log(yearr);
  let allbooks = await BookModel.find({ year: yearr });
  res.send({ msg: allbooks });
};

const getParticularBooks = async function (req, res)
{
    let allBook= req.body
    console.log(allBook)
    let randomBooks= await BookModel.find(allBook)
    res.send({ msg: allBook });
};

const getXINRBooks = async function (req, res)
{
    let indPrice = await BookModel.find({ "prices.indianprice": { $in: ["Rs400", "Rs500", "Rs600"] },});
    res.send({ msg: indPrice });
};

const getRandomBooks = async function (req, res)
{
    let GT500 = await BookModel.find({
    $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],});
    res.send({ msg: GT500 });
};

module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks