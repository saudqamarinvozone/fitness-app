const express = require('express');

const router = express.Router();

const auth = require('./auth.routes');
const user = require('./user.routes');
const exercise = require('./exercise.routes');
const routine = require('./routine.routes');
const workout = require('./workout.routes');

router.use('/', auth);
router.use('/users', user);
router.use('/exercises', exercise);
router.use('/routines', routine);
router.use('/workouts', workout);

module.exports = router;
