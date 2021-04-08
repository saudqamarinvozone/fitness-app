'use strict';
const {
  Model,
} = require('sequelize');
const Exercise = require('./exercise');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  class UserExercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  UserExercises.init({

    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },

    exerciseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Exercise,
        key: 'id',
      },
    },

  }, {
    sequelize,
    modelName: 'UserExercises',
  });
  return UserExercises;
};
