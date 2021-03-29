const express = require('express');

const router = express.Router();
// const Exercise = require('../models/exercise');
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
router.post('/', (req, res) => {
  const exercise = Exercise.create({
    title: 'test ex',
    description: 'desc',
  });
  res.json(exercise);
});
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
router.get('/', (req, res) => {
  res.send('exercises');
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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 */
router.get('/featured', (req, res) => {
  res.send('featured exercises');
});

module.exports = router;
