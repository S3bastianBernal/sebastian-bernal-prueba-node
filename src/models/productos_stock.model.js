import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/connection.js";

const ProductoStockModel = sequelizeConnection.define('productos_stocks',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cantidad:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    id_tienda:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tiendas',
            key: 'id'
        }
    },
    id_producto:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id'
        }
    },
    fecha_ingreso:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelizeConnection,
    modelName: 'ProductoStock',
    tableName: 'productos_stocks',
    timestamps: false
})

export default ProductoStockModel