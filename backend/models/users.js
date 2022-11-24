'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false},
    email: {
      type: DataTypes.STRING,
      allowNull: false},
    password: {
      type: DataTypes.STRING,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
  });
  return Users;
};