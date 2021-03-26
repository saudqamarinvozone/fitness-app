'use strict';
const {
  Model
} = require('sequelize');

const Exercise = require('./exercise');
const Log = require('./workout');

module.exports = (sequelize, DataTypes) => {

  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Routine.belongsToMany(Exercise, { through: 'RoutineExercises' });
      Routine.hasMany(Log);
    }
  };
  Routine.init({

    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3,2)
  }, {
    sequelize,
    modelName: 'Routine',
  });
  return Routine;
};