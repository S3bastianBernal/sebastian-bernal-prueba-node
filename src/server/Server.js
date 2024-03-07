import express from "express";
import cors from "cors";
import Productos_routes from "../routes/productos.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 6996;
        this.pahts = {
            productos:"/api/productos",
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.pahts.productos, Productos_routes)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`server is running on port ${this.port}`);
        })
    }
}

export default Server;