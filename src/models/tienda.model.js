import { DataTypes } from "sequelize";
import sequelizeConnection from "../database/connection.js";

const TiendaModel = sequelizeConnection.define('tienda',{
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_anexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_barrio : {
        type: DataTypes.STRING,
        allowNull: false
    },
    calificacion : {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    calificacion_cantidad: {
        type: DataTypes.MEDIUMINT,
        allowNull: false
    },
    impuestos: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    dias_trabajados: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelizeConnection,
    modelName: 'Tienda',
    tableName: 'tiendas',
    timestamps: false
})

export default TiendaModel