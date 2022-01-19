const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "temperament",
    {
      name: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
