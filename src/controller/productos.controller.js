import sql from "sequelize";

import ProductoModel from "../models/producto.model.js";
import TiendaModel from "../models/tienda.model.js";
import ProductoStockModel from "../models/productos_stock.model.js";
import PedidosProductosModel from "../models/pedidos_productos.model.js";

TiendaModel.belongsToMany(ProductoModel,{through: ProductoStockModel, foreignKey: 'id_tienda'});
ProductoModel.belongsToMany(TiendaModel,{through: ProductoStockModel, foreignKey: 'id_producto'})

ProductoModel.belongsTo(PedidosProductosModel, {foreignKey: "id"})
PedidosProductosModel.belongsTo(ProductoModel, {foreignKey: "id_producto"})

const verProductos = async (req,res) =>{
    try {
        const productos = await ProductoModel.findAll({
            include: [
                {
                    model: TiendaModel
                }
            ],
        });
        const productoRender = productos.map(({id,nombre,presentacion,tiendas}) => ({
            idProducto: id,
            nombre,
            presentacion,
            tiendas: tiendas.map(({id,nombre,productos_stocks,productos_stock})=>({
                idTienda:id,
                nombre,
                stock: productos_stocks.cantidad
            }))
        }))

        
        res.status(200).json({
            "message":'consultado correctamente',
            "data": productoRender
        })
    } catch (error) {
        console.error(error);
    }
};

const ProductoMasVendido = async(req,res) =>{
    try {
        const productos = await PedidosProductosModel.findAll({
            include: [
                {
                    model: ProductoModel,
                }
            ],
            order: [["cantidad", "DESC"]],
            limit: 10

        })

        const productoRender = productos.map(({cantidad,producto})=>({
            idProducto: producto.id,
            nombre: producto.nombre,
            presentacion: producto.presentacion,
            unidadesVendidas: cantidad
        }))

        res.status(200).json({
            "message":'consultado correctamente',
            "data": productoRender
        })
    } catch (error) {
        console.error(error);
    }
}

const OrdenarCategorias = async(req,res) =>{
    try {
        
    } catch (error) {
        console.error(error);
    }
}






export {
    verProductos,
    ProductoMasVendido
}