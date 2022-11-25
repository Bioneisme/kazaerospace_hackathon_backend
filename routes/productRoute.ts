import {Router} from "express";
import {parser} from "../controllers/parserController";

const router: Router = Router();

router.post('/parser', parser);

export default router;