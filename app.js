var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./models/todoModel'),
    User = require('./models/userModel'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    routes = require('./routes/todoRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://192.168.1.4/Tododb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    if(req.headers && req.headers.authorization) {
        jwt.verify(req.headers.authorization, 'RESTFULAPIS', function(err, decode) {
            if(err) req.user = undefined;
            req.user = decode;
            next();
        })
    }else {
        req.user = undefined;
        next();
    }
});

routes(app);

app.listen(port, function() {
    console.log('Server start. Port: 3000')
})