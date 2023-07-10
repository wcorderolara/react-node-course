'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'restaurant_schedule',
      'holidays_open',
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
  }
};
