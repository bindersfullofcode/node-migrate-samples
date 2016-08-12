'use strict';

const Express = require('express');
const app = Express();

const UsersController = require('./controllers/users');

app.use('/users', UsersController);

app.listen(3000, () => {
    console.log('App Started!');
});