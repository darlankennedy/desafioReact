const { Model, DataTypes } = require("sequelize");

class Compras extends Model {
  static init(sequelize) {
    super.init(
      {
        total: DataTypes.DOUBLE,
        tipo_pagamento: DataTypes.STRING,
        status: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "compras",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Produtos, {
      through: "itemcompra",
      foreignKey: "prodId",
      as: "item",
    });
  }
}

module.exports = Compras;
