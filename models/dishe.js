'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Dishe.hasMany(models.Order, {
        foreignKey: 'dish_id',
      });
  }
  }
  Dishe.init({
    dishname: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
    categoy_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dishe',
  });
  return Dishe;
};