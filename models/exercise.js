'use strict';
const {
  Model
} = require('sequelize');

const Routine = require('./routine');

module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Excercise.belongsToMany(Routine, { through: 'RoutineExercises' });
    }
  };
  Exercise.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3,2)
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};