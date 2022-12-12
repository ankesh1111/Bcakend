  const express= require("express")
const { TodoModel } = require("../models/Todo.model");


const todoRouter = express.Router();

// GET REQUEST
todoRouter.get("/", async (req, res) => {
    const todos = await TodoModel.find()
    res.send(todos)
})

//  POST REQUEST


todoRouter.post("/create", async (req, res) => {
    const payload = req.body
     
    try{
        const new_todo = new TodoModel(payload)
        await new_todo.save()
        res.send({"msg" : "Note created successfully"})
    }
    catch(err){
        console.log(err)
        res.send({"err" : "Something went wrong"})
    }
})

//  PATCH REQUEST



todoRouter.patch("/update/:noteID", async (req, res) => {
        const payload= req.body;
        const todoID = req.params.todoID
        
            await TodoModel.findByIdAndUpdate({_id : todoID},payload)
            res.send({"msg" : "Note updated successfully"})
        
})

//   DELETE REQUEST

todoRouter.delete("/delete/:todoID", async (req, res) => {
    const todoID = req.params.todoID
     
        await TodoModel.findByIdAndDelete({_id : todoID})
        res.send({"msg" : "Note deleted successfully"})
     
})


module.exports = {todoRouter}