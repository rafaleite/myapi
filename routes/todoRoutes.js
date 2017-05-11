'use strict'

module.exports = function(app) {
    var todo = require('../controllers/todoController');

    app.route('/tasks')
        .get(todo.list_all_tasks)
        .post(todo.create_task);
    
    app.route('/tasks/:id')
        .get(todo.read_task)
        .put(todo.update_task)
        .delete(todo.delete_task);
}
