const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const db = require('../models/index');

const { User } = db;
const {
  register, login, forgetPassword, resetPassword,
} = require('../controllers/auth.controller');
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
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
 * @apiError (PasswordValid) Password password at least have 8 characters and must have one digit,
 * one special character
 * and one UpperCase letter
 *
 * @apiError (ConfirmPasswordMatch) ConfirmPassword confirm_password and password doesn't match
 */

router.post('/sign-up',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('contact_no').exists(),
    body('dob').exists(),
    body('email').custom((value) => {
      return User.findOne({
        where: { email: value },
      }).then(user => {
        if (user)
          return Promise.reject('Email already in use');
      })
    }),
    body('confirm_password').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }

      // Indicates the success of this synchronous custom validator
      return true;
    }),
  ],
  register);
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 *
 * @apiError (EmailRequired) Email email field cannot be empty
 * @apiError (EmailValid) Email email field should be type of email
 *
 * @apiError (Password) Password password field cannot be empty
 *
 */

router.post('/login',
  [
    body('email').isEmail(),
    body('password').exists(),
  ],
  login);
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 *
 * @apiError (EmailRequired) Email email field cannot be empty
 * @apiError (EmailValid) Email email field should be type of email
 */
router.post('/forget-password', [
  body('email').isEmail(),
], forgetPassword);

/**
 * @api {post} /reset-password Change Password
 * @apiName Reset Password
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (404 Unauthorized) NotFound User against email not found
 *
 * @apiError (emailRequired) Email email field cannot be empty
 * @apiError (tokenRequired) Token token field cannot be empty
 *
 * @apiError (PasswordRequired) Password password field cannot be empty
 * @apiError (PasswordValid) Password password at least have 8 characters
 * and must have one digit, one special character
 * and one UpperCase letter
 * @apiError (ConfirmPasswordMatch) ConfirmPassword confirm_password and password doesn't match
 */
router.post('/reset-password', [
  body('password').isLength({ min: 6 }),
  body('confirm_password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }

    // Indicates the success of this synchronous custom validator
    return true;
  }),
], resetPassword);

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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 *
 */
// router.post('/logout', (req, res) => {

// });

module.exports = router;
