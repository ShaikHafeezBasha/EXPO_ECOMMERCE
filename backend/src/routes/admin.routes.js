import {Router} from "express";
import { createProduct,getAllProducts,updateProduct } from "../controllers/admin.controller.js";
import {protectRoute,adminOnly} from "../middleware/auth.middleware.js"
import {upload} from "../middleware/multer.middleware.js"

const router = Router();

//optimization - DRY
router.use(protectRoute,adminOnly)

router.post("/products",upload.array("images",3),createProduct)

router.get("/products",getAllProducts);

router.put("/products/:id",upload.array("images",3),updateProduct);



export default router;