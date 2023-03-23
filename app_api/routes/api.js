const express = require('express');
const router = express.Router();
const controllerToDo = require('../controllers/todo');

router.route('/').get('', controllerToDo);
