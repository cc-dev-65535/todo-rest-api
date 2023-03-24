const mongoose = require('mongoose');
// retrieve the previously defined todo model
const Todo = mongoose.model('Todo');

// READ all todos
async function listAllTodos(req, res) {
    const allTodos = await Todo.find({})
                                .select('-owner')
                                .exec();
    res.status(200)
        .json(allTodos);
}

// CREATE a todo
async function createTodo(req, res) {
    const newTodo = new Todo({ author: req.body.author,
                                description: req.body.description, 
                                category: req.body.category});
    try {
        const savedTodo = await newTodo.save();
    } catch (error) {
        return res.status(400)
                    .json(error);
    }
    res.status(201)
        .json(savedTodo);
}


// READ todos by category
async function listTodosByCategory(req, res) {
    const categoryTodos = await Todo.find({ category: req.params.category })
                                    .select('-owner')
                                    .exec();
    res.status(200)
        .json(categoryTodos);
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