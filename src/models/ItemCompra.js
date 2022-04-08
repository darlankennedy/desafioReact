const { Model, DataTypes } = require("sequelize");

class ItemCompra extends Model {
  static init(sequelize) {
    super.init(
      {
        compraId: DataTypes.INTEGER,
        prodId: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "itemcompra",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Compras, { foreignKey: "compraId" });
    this.belongsTo(models.Produtos, { foreignKey: "prodId" });
  }
}

module.exports = ItemCompra;
