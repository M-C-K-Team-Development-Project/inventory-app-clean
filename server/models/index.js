const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const Items = sequelize.define("items", {
  title: DataTypes.STRING,
  price: DataTypes.REAL,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = {
  db: sequelize,
  Items
};
