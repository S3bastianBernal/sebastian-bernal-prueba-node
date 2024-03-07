import { DataTypes } from 'sequelize';
import sequelizeConnection from "../database/connection.js";

const CategoriaModel = sequelizeConnection.define("categoria",{
    nombre: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 30]
        },
        allowNull:false
      },
    adultos: {
        type: DataTypes.TINYINT,
        allowNull:false
    }
},{
    sequelizeConnection,
    modelName: "Categoria",
    tableName: "categorias",
    timestamps: false
})

export default CategoriaModel