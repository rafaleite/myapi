'use strict'

module.exports = function(app) {
    var todo = require('../controllers/todoController'),
        userHandler = require('../controllers/userController') ;

    app.route('/tasks')
        .get(todo.list_all_tasks)
        .post(userHandler.loginRequired, todo.create_task);
    
    app.route('/tasks/:id')
        .get(todo.read_task)
        .put(todo.update_task)
        .delete(todo.delete_task);

    app.route('/auth/register')
        .post(userHandler.register);
    
    app.route('/auth/sign_in')
        .post(userHandler.sign_in);
}
