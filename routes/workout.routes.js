const express = require('express');

const router = express.Router();

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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.post('/', (req, res) => {

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
 * @apiError (500 Internal Server Error) InternalServerError
 * The server encountered an internal error
 * @apiError (401 Unauthorized) Unauthorized Unable to access/Access Denied
 *
 */
router.post('/:id', (req, res) => {

});

module.exports = router;
