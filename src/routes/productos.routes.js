import { Router } from "express";
import { verProductos,ProductoMasVendido } from "../controller/productos.controller.js";

const router = Router();

router.get('/verProductos', verProductos);
router.get('/verMasVendido', ProductoMasVendido);

export default router;