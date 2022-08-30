const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Sauce = sequelize.define("sauces", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
});

const Item = sequelize.define("items", {
  title: DataTypes.STRING,
  price: DataTypes.REAL,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
  Item,
};
