import {Router} from "express";
import {parser} from "../controllers/parserController";
import {getAllProducts, getProductById, getStoresByTitle} from "../controllers/productController";

const router: Router = Router();

router.post('/parser', parser);

router.get('/getAllProducts', getAllProducts);

router.get('/getProductById/:id', getProductById);

router.get('/getStoresByTitle/:title', getStoresByTitle);

export default router;