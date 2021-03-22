'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      
      level: {
        type: Sequelize.ENUM,
        allowNull: true,
        values: ['begginner', 'medium', 'pro', 'expert'],
      
      },
      
      rating: {
        type: Sequelize.DECIMAL(3,2)
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
    await queryInterface.dropTable('Exercises');
  }
};