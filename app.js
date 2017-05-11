var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./models/todoModel'),
    bodyParser = require('body-parser'),
    routes = require('./routes/todoRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.1.4/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port, function() {
    console.log('Server start. Port: 3000')
})