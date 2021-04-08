const express = require('express');

const router = express.Router();
require('dotenv').config();

const auth = require('../middlewares/auth');
const authRoutes = require('./auth.routes');
const user = require('./user.routes');
const exercise = require('./exercise.routes');
const routine = require('./routine.routes');
const workout = require('./workout.routes');

router.use('/', authRoutes);
router.use('/users', user);
router.use('/exercises', auth, exercise);
router.use('/routines', routine);
router.use('/workouts', workout);

module.exports = router;
