const express = require('express');
const router = express.Router();
const controllerTodo = require('../controllers/todo');
const controllerAuthentication = require('../controllers/authentication');

// routing for CREATE and READ requests
router.route('/todos')
    .get(controllerTodo.listAllTodos)
    .post(controllerTodo.createTodo);
router.route('/todos/:category')
    .get(controllerTodo.listTodosByCategory);

// routing for UPDATE and DELETE requests
router.route('/todos/:todosID')
    .put(controllerTodo.updateTodo)
    .delete(controllerTodo.deleteTodo);

// routing for authentication-related requests
router.post('/register', controllerAuthentication.register);
router.post('/login', controllerAuthentication.login);
router.get('/logout', controllerAuthentication.logout);

module.exports = router;