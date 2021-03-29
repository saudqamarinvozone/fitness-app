const express = require('express');

const router = express.Router();

const auth = require('./auth.routes');
const exercise = require('./exercise.routes');
const routine = require('./routine.routes');
const logs = require('./log.routes');

router.use('/', auth);
router.use('/exercises', exercise);
router.use('/routines', routine);
router.use('/logs', logs);

module.exports = router;
