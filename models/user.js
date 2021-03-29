const {
  Model
} = require('sequelize');
const Exercise = require('./exercise');
const Workout = require('./workout');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(Exercise, { through: 'UserExercise' });
      // User.hasMany(Workout);
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
