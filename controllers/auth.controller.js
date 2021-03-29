const db = require('../models/index');

const { User } = db;

const register = async (req, res) => {
  const usern = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dob: req.body.dob,
  });

  return res.json(usern);
};

module.exports.register = register;
