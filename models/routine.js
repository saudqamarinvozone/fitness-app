'use strict';
const {
  Model
} = require('sequelize');
const Exercise = require('./exercise');

module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Routine.belongsToMany(Exercise, { through: 'RoutineExercise' });
    }
  }
  Routine.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3, 2),
  }, {
    sequelize,
    modelName: 'Routine',
  });
  return Routine;
};
