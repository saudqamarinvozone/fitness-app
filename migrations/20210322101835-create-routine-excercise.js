'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RoutineExercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      routineId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Routines',
          key: 'id'
        }
      },

      exerciseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Exercises',
          key: 'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RoutineExercises');
  }
};