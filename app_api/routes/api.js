const express = require('express');
const router = express.Router();
const controllerTodo = require('../controllers/todo');

// routing for CREATE AND READ requests
router.route('/todos')
    .get(controllerTodo.listAllTodos)
    .post(controllerTodo.createTodo);
router.route('/todos/:category')
    .get(controllerTodo.listTodosByCategory);

// routing for UPDATE AND DELETE requests
router.route('/todos/:todosID')
    .put(controllerTodo.updateTodo)
    .delete(controllerTodo.deleteTodo);

module.exports = router;