const mongoose = require('mongoose');
// retrieve the previously defined todo model
const Todo = mongoose.model('Todo');

// READ all todos
function listAllTodos(req, res) {
    Todo.find();
}

// CREATE a todo
function createTodo(req, res) {

}


// READ todos by category
function listTodosByCategory(req, res) {

}


// UPDATE a todo
function updateTodo(req, res) {

}

//DELETE a todo
function deleteTodo(req, res) {

}

module.exports = {
    listAllTodos,
    createTodo,
    listTodosByCategory,
    updateTodo,
    deleteTodo
};