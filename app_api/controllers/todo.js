const mongoose = require('mongoose');
// retrieve the previously defined todo model
const Todo = mongoose.model('Todo');

// READ all todos
async function listAllTodos(req, res) {
    let allTodos;
    try {
        allTodos = await Todo.find({})
                                .select('-owner')
                                .exec();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(200)
        .json(allTodos);
}

// CREATE a todo
async function createTodo(req, res) {
    if (!req.body.author || !req.body.description || !req.body.category) {
        return res.status(400)
                    .json({"error": "missing fields"});
    }

    const newTodo = new Todo({ author: req.body.author,
                                description: req.body.description, 
                                category: req.body.category});
    let savedTodo;
    try {
        savedTodo = await newTodo.save();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(201)
        .json(savedTodo);
}


// READ todos by category
async function listTodosByCategory(req, res) {
    let categoryTodos;
    try{
        categoryTodos = await Todo.find({ category: req.params.category })
                                    .select('-owner')
                                    .exec();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(200)
        .json(categoryTodos);
}

// READ todos by userID
function listTodosByUser() {

}


// UPDATE a todo
function updateTodo(req, res) {

}

// DELETE a todo
function deleteTodo(req, res) {

}

module.exports = {
    listAllTodos,
    createTodo,
    listTodosByCategory,
    updateTodo,
    deleteTodo
};