'use strict';
module.exports = function (app) {
  var todoList = require('../controllers/todoController');

  app.route('/todos')
    .get(todoList.list)
    .post(todoList.create);

  app.route('/todos/:taskId')
    .delete(todoList.delete);
};