const db = require('../models/index');
const { errorCodes, userErrors, exerciseErrors } = require('../constants/errors');

const { User, Exercise } = db;

const destroy = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) {
    res.status(errorCodes.NOT_FOUND).json({ message: 'NOT FOUND' });
  }

  user.destroy();
  return res.status(errorCodes.OK).json('user');
};

const createUserExercise = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.body.id,
    },
  });

  if (!user) {
    res.status(errorCodes.NOT_FOUND).json({ message: userErrors.NOT_FOUND });
  }

  const exercise = await Exercise.findOne({
    where: {
      id: req.body.exerciseId,
    },
  });

  if (!exercise) {
    res.status(errorCodes.NOT_FOUND).json({ message: exerciseErrors.NOT_FOUND });
  }

  await user.addExercise(exercise);

  res.status(errorCodes.OK).json(user);
};

module.exports = {

  destroy,
  createUserExercise,
};
