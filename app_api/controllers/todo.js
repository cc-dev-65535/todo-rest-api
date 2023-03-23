const mongoose = require('mongoose');
// retrieve the previously defined todo model
const Todo = mongoose.model('Todo');

// READ all todos
async function listAllTodos(req, res) {
    const allTodos = await Todo.find({}).exec();
    res.status(200)
        .json(allTodos);
}

// CREATE a todo
function createTodo(req, res) {

}


// READ todos by category
async function listTodosByCategory(req, res) {
    const categoryTodos = await Todo.find({ category: req.params.category }).exec();
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