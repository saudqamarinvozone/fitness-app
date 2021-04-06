'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoutineExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  RoutineExercise.init({
    routineId: DataTypes.INTEGER,
    exerciseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RoutineExercise',
  });

  return RoutineExercise;
};
