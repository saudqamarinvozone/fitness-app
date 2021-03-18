const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


/**
 * @api {post} /sign-up Sign-up
 * @apiName Signup
 * @apiGroup User
 *
 */
app.get('/sign-up', (req, res) => {
    res.send('Hello World') ;
});

/**
 * @api {post} /login Login
 * @apiName Login
 * @apiGroup User
 *
 */
app.post('/login', (req, res) => {

});

/**
 * @api {post} /reset-password Reset Password
 * @apiName Reset Password
 * @apiGroup User
 *
 */
app.post('/reset-password', (req, res) => {

});

/**
 * @api {post} /logout Logout
 * @apiName Logout
 * @apiGroup User
 *
 */
app.post('/logout', (req, res) => {

});

/**
 * @api {post} /exercises All Exercises
 * @apiName Get All Exercises
 * @apiGroup Exercises
 *
 */
app.get('/exercises', (req, res) => {

});

/**
 * @api {post} /exercises/featured Featured Exercises
 * @apiName Get Featured Exercises
 * @apiGroup Exercises
 *
 */
app.get('/exercises/featured', (req, res) => {

});

/**
 * @api {post} /routines Get All Routines
 * @apiName Get All Routines
 * @apiGroup Routines
 *
 */
app.get('/routines', (req, res) => {

});

/**
 * @api {post} /routines Get Routine
 * @apiName Get Routine
 * @apiGroup Routines
 *
 */
app.get('/routines/:id', (req, res) => {

});

/**
 * @api {post} user/routines Create User Routines
 * @apiName Create User Routine
 * @apiGroup Routines
 *
 */
app.post('/user/routines', (req, res) => {

});

/**
 * @api {post} /logs Create Log
 * @apiName Create Log
 * @apiGroup Logs
 *
 */

app.post('/logs', (req, res) => {

});

/**
 * @api {post} /logs/:id Update Log
 * @apiName Update Log
 * @apiGroup Logs
 *
 */
app.post('/logs/:id', (req, res) => {

});

app.listen(5000, function() {
    console.log('Task api up and running...');
});