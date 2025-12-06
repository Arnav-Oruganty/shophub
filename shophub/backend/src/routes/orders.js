import express from "express";
import {
  createOrder,
  getOrdersForUser,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/:username", getOrdersForUser);

export default router;
