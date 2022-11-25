import {Router} from "express";
import {parser} from "../controllers/parserController";
import {getAllProducts} from "../controllers/productController";

const router: Router = Router();

router.post('/parser', parser);

router.get('/getAllProducts', getAllProducts);

export default router;