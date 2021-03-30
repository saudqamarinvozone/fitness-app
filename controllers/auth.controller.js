const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../models/index');

const { User } = db;

const register = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const usern = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    dob: req.body.dob,
  });

  return res.json(usern);
};
const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  }
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) {
    res.status(401).json({ message: 'Email or password is incorrect' });
  }
  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    res.status(401).json({ message: 'Email or password is incorrect' });
  }

  res.json(user);
};

module.exports = {
  register,
  login,
};
