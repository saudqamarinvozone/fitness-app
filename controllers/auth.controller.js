const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { errorCodes, userErrors } = require('../constants/errors');
const db = require('../models/index');

const { User } = db;

const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(errorCodes.BAD_REQUEST).json({ errors: errors.array() });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    dob: req.body.dob,
  });

  return res.status(errorCodes.CREATED).json(user);
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(errorCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      res.status(errorCodes.BAD_REQUEST).json({ message: userErrors.INVALID_CREDENTAILS });
    }
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      res.status(errorCodes.BAD_REQUEST).json({ message: userErrors.INVALID_CREDENTAILS });
    }

    const result = {
      authToken: jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY),
    };

    res.status(errorCodes.OK).json(result);
  } catch (error) {
    res.status(errorCodes.SERVER_ERROR).send({ data: null, message: error });
  }
};
const forgetPassword = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(errorCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      res.status(errorCodes.NOT_FOUND).json({ message: userErrors.NOT_FOUND });
    }

    res.status(errorCodes.OK).json(user);
  } catch (error) {
    res.status(errorCodes.SERVER_ERROR).send({ message: error });
  }
};

const resetPassword = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(errorCodes.BAD_REQUEST).json({ errors: errors.array() });
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      res.status(errorCodes.NOT_FOUND).json({ data: null, message: 'Email or password is incorrect' });
    }

    user.password = await bcrypt.hash(req.body.password, 10);
    user.save();

    res.status(errorCodes.OK).json(user);
  } catch (error) {
    res.status(errorCodes.SERVER_ERROR).send({ data: null, message: error });
  }
};

module.exports = {
  register,
  login,
  forgetPassword,
  resetPassword,
};
