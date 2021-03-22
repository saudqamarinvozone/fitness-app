const express = require('express');
const Sequelize = require('sequelize');

const routes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// console.log(routes);
app.use('/', routes);

app.listen(5000, function () {
    console.log('Task api up and running...');
});