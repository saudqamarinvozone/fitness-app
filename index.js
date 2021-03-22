const express = require('express');
const Sequelize = require('sequelize');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

/**
 * @api {post} /sign-up Sign-up
 * @apiName Signup
 * @apiGroup User
 * 
 * @apiParam {string} name name of a user
 * @apiParam {email} email email of a user
 * @apiParam {string} contact_no Contact Number of a user
 * @apiParam {date} dob Date of birth of a user
 * @apiParam {string} password Password of a user
 * @apiParam {string} confirm_password Password of a user
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} user
 * @apiSuccess {number} user.id
 * @apiSuccess {string} user.name
 * @apiSuccess {string} user.email
 * @apiSuccess {string} user.contact_no
 * @apiSuccess {number} user.age
 * @apiSuccess {string} access_token
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (NameRequired) Name name field cannot be empty
 * @apiError (NameTooShort) Name name field at least have 4 characters
 *
 * @apiError (EmailRequired) Email email field cannot be empty
 * @apiError (EmailValid) Email email field should be type of email
 * @apiError (EmailUnique) Email email is already in use

 * @apiError (ContactNoRequired) ContactNo contact_no field cannot be empty
 *
 * @apiError (DobRequired) DateOfBirth date of birth field cannot be empty
 *
 * @apiError (PasswordRequired) Password password field cannot be empty
 * @apiError (PasswordValid) Password password at least have 8 characters and must have one digit, one special character
 * and one UpperCase letter
 *
 * @apiError (ConfirmPasswordMatch) ConfirmPassword confirm_password and password doesn't match
 */
app.get('/sign-up', (req, res) => {
    res.send('Hello World');
});

/**
 * @api {post} /login Login
 * @apiName Login
 * @apiGroup User
 *
 * @apiParam {email} email Email of a user
 * @apiParam {string} password Password of a user
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} user
 * @apiSuccess {number} user.id
 * @apiSuccess {string} user.name
 * @apiSuccess {string} user.email
 * @apiSuccess {string} user.contact_no
 * @apiSuccess {number} user.age
 * @apiSuccess {string} access_token
 *
 * @apiError (401 Unauthorized) Unauthorized Invalid credentials
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 *
 * @apiError (EmailRequired) Email email field cannot be empty
 * @apiError (EmailValid) Email email field should be type of email
 *
 * @apiError (Password) Password password field cannot be empty
 *
 */
app.post('/login', (req, res) => {

});

/**
 * @api {post} /reset-password Reset Password
 * @apiName Reset Password
 * @apiGroup User
 *
 * @apiParam {email} email Email of a user
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 *
 * @apiError (404 Unauthorized) NotFound User against email not found
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 *
 * @apiError (EmailRequired) Email email field cannot be empty
 * @apiError (EmailValid) Email email field should be type of email
 */
app.post('/reset-password', (req, res) => {

});

/**
 * @api {post} /change-password Change Password
 * @apiName Change Password
 * @apiGroup User
 *
 * @apiParam {email} email Email of a user
 * @apiParam {string} reset_password_token Token used for resetting the password
 * @apiParam {string} password New Password of a user
 * @apiParam {string} confirm_password Confirm Password of a user
 *
 * @apiSuccess {String} status
 * @apiSuccess {String} message
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (404 Unauthorized) NotFound User against email not found
 *
 * @apiError (emailRequired) Email email field cannot be empty
 * @apiError (tokenRequired) Token token field cannot be empty
 *
 * @apiError (PasswordRequired) Password password field cannot be empty
 * @apiError (PasswordValid) Password password at least have 8 characters and must have one digit, one special character
 * and one UpperCase letter
 * @apiError (ConfirmPasswordMatch) ConfirmPassword confirm_password and password doesn't match
 */
app.get('/change-password', (req, res) => {
    res.send('Hello World');
});

/**
 * @api {post} /logout Logout
 * @apiName Logout
 * @apiGroup User
 *
 * @apiHeader {string} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 *
 */
app.post('/logout', (req, res) => {

});

/**
 * @api {post} /exercises All Exercises
 * @apiName Get All Exercises
 * @apiGroup Exercises
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object[]} exercises
 * @apiSuccess {number} exercises.id
 * @apiSuccess {string} exercises.title
 * @apiSuccess {string} exercises.description
 * @apiSuccess {string} exercises.rating
 * @apiSuccess {string} exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.get('/exercises', (req, res) => {

});

/**
 * @api {post} /exercises/featured Featured Exercises
 * @apiName Get Featured Exercises
 * @apiGroup Exercises
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object[]} exercises
 * @apiSuccess {number} exercises.id
 * @apiSuccess {string} exercises.title
 * @apiSuccess {string} exercises.description
 * @apiSuccess {string} exercises.rating
 * @apiSuccess {string} exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 */
app.get('/exercises/featured', (req, res) => {

});

/**
 * @api {post} /routines Get All Routines
 * @apiName Get All Routines
 * @apiGroup Routines
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object[]} routines
 * @apiSuccess {number} routines.id
 * @apiSuccess {string} routines.title
 * @apiSuccess {string} routines.description
 * @apiSuccess {string} routines.rating
 * @apiSuccess {string} routines.level
 * @apiSuccess {objects[]} routines.exercises
 * @apiSuccess {number} routines.exercises.id
 * @apiSuccess {string} routines.exercises.title
 * @apiSuccess {string} routines.exercises.description
 * @apiSuccess {string} routines.exercises.rating
 * @apiSuccess {string} routines.exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.get('/routines', (req, res) => {

});

/**
 * @api {get} /routines Get Routine
 * @apiName Get Routine
 * @apiGroup Routines
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiParam {number} id Id of a routine
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {number} id
 * @apiSuccess {string} title
 * @apiSuccess {string} description
 * @apiSuccess {string} rating
 * @apiSuccess {string} level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.get('/routines/:id', (req, res) => {

});

/**
 * @api {post} user/routines Create User Routines
 * @apiName Create User Routine
 * @apiGroup Routines
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiParam {number} routineId Id of a routine
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.post('/user/routines', (req, res) => {

});

/**
 * @api {get} user/routines Get User Routines
 * @apiName Get User Routine
 * @apiGroup Routines
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object[]} routine
 * @apiSuccess {number} routine.id
 * @apiSuccess {string} routine.title
 * @apiSuccess {string} routine.description
 * @apiSuccess {string} routine.rating
 * @apiSuccess {string} routine.level
 * @apiSuccess {objects[]} routine.exercises
 * @apiSuccess {number} routines.exercises.id
 * @apiSuccess {string} routines.exercises.title
 * @apiSuccess {string} routines.exercises.description
 * @apiSuccess {string} routines.exercises.rating
 * @apiSuccess {string} routines.exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.get('/user/routines', (req, res) => {

});

/**
 * @api {post} /logs Create Log
 * @apiName Create Log
 * @apiGroup Logs
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiParam {number} routineId Id of a routine
 * @apiParam {dateTime} date_time Date time of routine when it will be executed
 * @apiParam {string} duration how long user perform a routine
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {id} id
 * @apiSuccess {dateTime} date_time_of_routine
 * @apiSuccess {string} duration
 * @apiSuccess {object} routine
 * @apiSuccess {number} routine.id
 * @apiSuccess {string} routine.title
 * @apiSuccess {string} routine.description
 * @apiSuccess {string} routine.rating
 * @apiSuccess {string} routine.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.post('/logs', (req, res) => {

});

/**
 * @api {post} /logs/:id Update Log
 * @apiName Update Log
 * @apiGroup Logs
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiParam {number} id Id of a log
 * @apiParam {dateTime} date_time Date time of routine when it will be executed
 * @apiParam {string} duration how long user perform a routine
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {id} id
 * @apiSuccess {dateTime} date_time_of_routine
 * @apiSuccess {string} duration
 * @apiSuccess {object} routine
 * @apiSuccess {number} routine.id
 * @apiSuccess {string} routine.title
 * @apiSuccess {string} routine.description
 * @apiSuccess {string} routine.rating
 * @apiSuccess {string} routine.level
 *
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
app.post('/logs/:id', (req, res) => {

});

app.listen(5000, function () {
    console.log('Task api up and running...');
});