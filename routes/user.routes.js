const express = require('express');

const router = express.Router();
const {
  destroy, createUserExercise,
} = require('../controllers/user.controller');

/**
 * @api {delete} /users/:id Delete User
 * @apiName Delete User
 * @apiGroup User
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiParam {id} id id of a user
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 *
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.delete('/:id', destroy);

/**
 * @api {post} /user/exercises Create User Exercise
 * @apiName Create User Exercise
 * @apiGroup User
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 *
 * @apiParam {integer} id id of a user
 * @apiParam {integer} exerciseId id of a exercise
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} user
 * @apiSuccess {number} user.id
 * @apiSuccess {string} user.name
 * @apiSuccess {string} user.email
 * @apiSuccess {string} user.contact_no
 * @apiSuccess {number} user.age
 *
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.post('/exercises', createUserExercise);

module.exports = router;
