'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      first_name: {
        field: 'first_name',
        type: DataTypes.STRING(32),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      last_name: {
        field: 'last_name',
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        field: 'email',
        unique: true,
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
      },
      password: {
        field: 'password_hash',
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
      underscored: true,
      tableName: 'users',
    }
  );
  return User;
};
