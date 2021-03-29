const db = require('../models/index');

const { Exercise } = db;

const store = async (req, res) => {
  const exercise = await Exercise.create({
    title: req.body.title,
    description: req.body.description,
    level: req.body.level,
  });

  return res.json(exercise);
};

const getAll = async (req, res) => {
  const exercises = await Exercise.findAll();
  return res.json(exercises);
};

const get = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!exercise) {
    res.status(404).json({ message: 'Record not found' });
  }
  return res.json(exercise);
};

const update = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!exercise) {
    res.status(404).json({ message: 'Record not found' });
  }

  exercise.title = req.body.title;
  exercise.description = req.body.description;
  exercise.level = req.body.level;
  exercise.save();
  return res.json(exercise);
};

const destroy = async (req, res) => {
  const exercise = await Exercise.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!exercise) {
    res.status(404).json({ message: 'Record not found' });
  }

  exercise.destroy();
  return res.json(exercise);
};
module.exports.store = store;
module.exports.getAll = getAll;
module.exports.get = get;
module.exports.update = update;
module.exports.destroy = destroy;
