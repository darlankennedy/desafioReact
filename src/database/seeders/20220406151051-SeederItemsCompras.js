'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('item-compras', [
      {
        id_compra: 1,
        id_produto: 3 ,
          created_at: new Date(),
          updated_at: new Date()
      },
       {
        id_compra: 1,
        id_produto: 4 ,
          created_at: new Date(),
          updated_at: new Date()
      },
        {
        id_compra: 1,
        id_produto: 3,
          created_at: new Date(),
          updated_at: new Date()
      }, {
        id_compra: 1,
          id_produto: 3,
          created_at: new Date(),
          updated_at: new Date()
        
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('item-compras', null, {});
  }
};
