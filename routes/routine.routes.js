const express = require('express');
const router = express.Router();

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
router.get('/', (req, res) => {
    res.send('get-routines');
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
router.get('/:id', (req, res) => {
    res.send('get signle routine');
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
router.post('/user', (req, res) => {

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
router.get('/user', (req, res) => {
    res.send('Get User Routines');
});

module.exports = router;