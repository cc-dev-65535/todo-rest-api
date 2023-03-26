const express = require('express');
const router = express.Router();
const controllerTodo = require('../controllers/todo');
const controllerAuthentication = require('../controllers/authentication');

// routing for CREATE and READ requests
router.route('/todos')
        .get(controllerTodo.listAllTodos)
        .post(controllerTodo.createTodo);
router.get('/todos/category/:category', controllerTodo.listTodosByCategory);
router.get('/todos/user/:userID', controllerTodo.listTodosByUser);
router.get('/todos/description/:keyword', controllerTodo.listTodosByDescription);

// routing for UPDATE and DELETE requests
router.route('/todos/:todoID')
        .put(controllerTodo.updateTodo)
        .delete(controllerTodo.deleteTodo);

// routing for authentication-related requests
router.post('/register', controllerAuthentication.register);
router.post('/login', controllerAuthentication.login);

module.exports = router;