import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/connection.js";

const ProductoCategoria = sequelizeConnection.define("productos_categorias",{
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelizeConnection,
    modelName:"ProductoCategoria",
    tableName: "productos_categorias",
    timestamps: false
})

export default ProductoCategoria