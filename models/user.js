const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Exercise, {
        through: models.UserExercises,
        foreignKey: 'userId',
        otherKey: 'exerciseId',
      });
      User.hasMany(models.Workout);
      // User.hasMany(Workout);
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeDestroy', async (user, options) => {
    const exercises = await user.getExercises();
    await user.removeExercises(exercises);
  });
  return User;
};
