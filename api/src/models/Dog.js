const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // set(value) {
        //   let value1 = value.toLowerCase().split(" ");
        //   let array = [];
        //   for (let i = 0; i < value1.length; i++) {
        //     array.push(value1[i].charAt(0).toUpperCase() + value1[i].slice(1));
        //     str = array.join(" ");
        //   }
        //   this.setDataValue("name", str);
        // },
      },
      weightMin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lifeSpanMin: {
        type: DataTypes.STRING,
      },
      lifeSpanMax: {
        type: DataTypes.STRING,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
