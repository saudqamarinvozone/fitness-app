const { validationResult } = require('express-validator');
const db = require('../models/index');
const { errorCodes, exerciseErrors } = require('../constants/errors');

const { Exercise } = db;

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(errorCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  const exercise = await Exercise.create({
    title: req.body.title,
    description: req.body.description,
    level: req.body.level,
  });

  return res.status(errorCodes.CREATED).json(exercise);
};

const getAll = async (req, res) => {
  const exercises = await Exercise.findAll();
  return res.status(errorCodes.OK).json(exercises);
};

const getFeatured = async (req, res) => {
  const exercises = await Exercise.findAll();
  return res.status(errorCodes.OK).json(exercises);
};

const get = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!exercise) {
    res.status(errorCodes.NOT_FOUND).json({ message: exerciseErrors.NOT_FOUND });
  }
  return res.status(errorCodes.OK).json(exercise);
};

const update = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!exercise) {
    res.status(errorCodes.NOT_FOUND).json({ message: exerciseErrors.NOT_FOUND });
  }

  exercise.title = req.body.title;
  exercise.description = req.body.description;
  exercise.level = req.body.level;
  exercise.save();
  return res.status(errorCodes.OK).json(exercise);
};

const destroy = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!exercise) {
    res.status(errorCodes.NOT_FOUND).json({ message: exerciseErrors.NOT_FOUND });
  }

  exercise.destroy();
  return res.status(errorCodes.OK).json(exercise);
};

module.exports = {
  store,
  getAll,
  getFeatured,
  get,
  update,
  destroy,
};
