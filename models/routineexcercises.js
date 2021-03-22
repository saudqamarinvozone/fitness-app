'use strict';
const {
  Model
} = require('sequelize');

const Excercise = require('./excercise');
const Routine = require('./routine');

module.exports = (sequelize, DataTypes) => {
  class RoutineExcercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RoutineExcercise.init({
    
    routineId: DataTypes.INTEGER,
    references: {
      'model': Routine,
      'key': id
    },
    exerciseId: DataTypes.INTEGER,
    references: {
      'model': Excercise,
      'key': id,
    }
  },
    {},
    {
    sequelize,
    modelName: 'RoutineExcercises',
  });
  return RoutineExcercises;
};