const Todo = require("../models/Todo");

exports.createTodo = async(res,rep)=>{
    try{
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
    }
    catch(err)  {

    }
}