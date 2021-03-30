'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exercise.belongsToMany(models.User, {
        through: models.UserExercises,
        foreignKey: 'exerciseId',
        otherKey: 'userId',
      });
    }
  }
  Exercise.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.STRING,
    rating: DataTypes.DECIMAL(3, 2),
  }, {
    sequelize,
    modelName: 'Exercise',
  });
  return Exercise;
};
