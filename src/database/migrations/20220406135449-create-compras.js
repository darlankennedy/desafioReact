'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('compras', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      total: {
        type: Sequelize.DOUBLE
      },
      tipo_pagamento: {
         type: Sequelize.STRING
      },
      status: {
         type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('compras');
  }
};
