import { DataTypes } from 'sequelize';
import sequelizeConnection from "../database/connection.js";

const ProductoModel = sequelizeConnection.define('producto',{
    estado: {
        type: DataTypes.TINYINT
      },
      kit: {
        type: DataTypes.TINYINT
      },
      barcode: {
        type: DataTypes.STRING,
        unique: true
      },
      nombre: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 60]
        }
      },
      presentacion: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 25]
        }
      },
      descripcion: {
        type: DataTypes.STRING
      },
      foto: {
        type: DataTypes.STRING
      },
      peso: {
        type: DataTypes.FLOAT
      }
},{
    sequelizeConnection,
    modelName: 'producto',
    tableName: 'productos',
    timestamps: false
})


export default ProductoModel