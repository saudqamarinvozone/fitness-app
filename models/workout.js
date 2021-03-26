'use strict';
const {
  Model
} = require('sequelize');

const Routine = require('./routine');

module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Workout.belongsTo(Routine)
    }
  };
  Workout.init({

    routineId: {
      type: Sequelize.INTEGER,
      references: {
        model: Routine,
        key: 'id'
      }
    },

    startTime: DataTypes.DATE,
    duration: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};