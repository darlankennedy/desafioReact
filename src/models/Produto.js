const { Model, DataTypes } = require("sequelize");

class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.DOUBLE,
      },
      {
        sequelize,
        tableName: "produtos",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Compras, {
      through: "itemcompra",
      foreignKey: "prodId",
      as: "compra",
    });
  }
}

module.exports = Produtos;
