// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
   const product = sequelize.define('Products', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      brand: {
         type: DataTypes.STRING,
         allowNull: false
      },
      description: {
         type: DataTypes.TEXT,
      },
      createdAt: {
         type: DataTypes.DATE,
         allowNull: false
      },
      updatedAt: {
         type: DataTypes.DATE,
         allowNull: false
      }
   }, {
      tableName: 'products'
   });
   return product;
}