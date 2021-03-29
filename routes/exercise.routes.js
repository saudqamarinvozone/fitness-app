const express = require('express');

const router = express.Router();
const {
  store, getAll, get, update, destroy,
} = require('../controllers/exercise.controller');

/**
 * @api {post} /exercises Create Exercises
 * @apiName Create Exercise
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.post('/', store);
/**
 * @api {get} /exercises All Exercises
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.get('/', getAll);

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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 */
router.get('/featured', (req, res) => {
  res.send('featured exercises');
});
/**
 * @api {get} /exercises Get Single Exercises
 * @apiName Get Single Exercises
 * @apiGroup Exercises
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} exercises
 * @apiSuccess {number} exercises.id
 * @apiSuccess {string} exercises.title
 * @apiSuccess {string} exercises.description
 * @apiSuccess {string} exercises.rating
 * @apiSuccess {string} exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.get('/:id', get);

/**
 * @api {put} /exercises Update Exercise
 * @apiName Update Exercise
 * @apiGroup Exercises
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} exercises
 * @apiSuccess {number} exercises.id
 * @apiSuccess {string} exercises.title
 * @apiSuccess {string} exercises.description
 * @apiSuccess {string} exercises.rating
 * @apiSuccess {string} exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.put('/:id', update);
/**
 * @api {put} /exercises Delete Exercise
 * @apiName Delete Exercise
 * @apiGroup Exercises
 *
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *      "Authorization": "Bearer 5f048fe"
 *
 * @apiSuccess {string} status
 * @apiSuccess {string} message
 * @apiSuccess {object} exercises
 * @apiSuccess {number} exercises.id
 * @apiSuccess {string} exercises.title
 * @apiSuccess {string} exercises.description
 * @apiSuccess {string} exercises.rating
 * @apiSuccess {string} exercises.level
 *
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.delete('/:id', destroy);
module.exports = router;
