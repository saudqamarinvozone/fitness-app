'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      
      exerciseId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Exercises',
          key: 'id'
        }
      },
      routineId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Routines',
          key: 'id'
        }
      },
      
      startTime: {
        type: Sequelize.DATE
      },

      duration: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Workouts');
  }
};