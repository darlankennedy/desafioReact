'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
         type: Sequelize.STRING
      },
      preco: {
         type: Sequelize.DOUBLE
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
  
     await queryInterface.dropTable('produtos');
  }
};
