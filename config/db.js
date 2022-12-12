

const mongoose = require("mongoose");

 
const connection = mongoose.connect("mongodb+srv://yadavji:yadavji@cluster0.pzqahii.mongodb.net/ealdb?retryWrites=true&w=majority");


module.exports={
    connection
}