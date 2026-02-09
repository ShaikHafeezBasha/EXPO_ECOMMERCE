import { Router } from "express";
import {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = Router();

router.use(protectRoute);

// address routes
router.post("/addresses", addAddress);
router.get("/addresses", getAddress);
router.put("/addresses/:addressId", updateAddress);
router.delete("/addresses/:addressId", deleteAddress);

//wishlist routes
router.post("/wishlist", addToWishlist);
router.get("/wishlist", getWishlist);
router.delete("/wishlist/:productId", removeFromWishlist);

export default router;
