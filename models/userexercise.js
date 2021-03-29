'use strict';
const {
  Model,
} = require('sequelize');
const Exercise = require('./exercise');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  class UserExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  UserExercise.init({

    userId: DataTypes.INTEGER,

    exerciseId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'UserExercise',
  });
  return UserExercise;
};
