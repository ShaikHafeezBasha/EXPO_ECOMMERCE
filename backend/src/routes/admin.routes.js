import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  getAllOrders,
  updateOrderStatus,
  getAllCustomers,
  getDashboardStats,
} from "../controllers/admin.controller.js";
import { protectRoute, adminOnly } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

//optimization - DRY
router.use(protectRoute, adminOnly);

//PRODUCTS
router.post("/products", upload.array("images", 3), createProduct);
router.get("/products", getAllProducts);
router.put("/products/:id", upload.array("images", 3), updateProduct);

//ORDERS
router.get("/orders", getAllOrders);
router.patch("/orders/:orderId/status", updateOrderStatus);

//CUSTOMERS
router.get("/customers", getAllCustomers);

router.patch("/stats", getDashboardStats);

export default router;
