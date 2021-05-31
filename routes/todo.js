const express = require('express');
const todoController = require('../controllers/todo');

const todoRouter = express.Router();

todoRouter.get('/',todoController.get);
todoRouter.put('/:description',todoController.post);
todoRouter.patch('/:id/:description',todoController.patch);
todoRouter.delete('/:id',todoController.deleteTodo);
module.exports = todoRouter;
