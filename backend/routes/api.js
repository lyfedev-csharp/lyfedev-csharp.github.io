import express from "express";
import products from "../data/products.json" assert { type: "json" };

const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ status: "ok", service: "elysor api" });
});

router.get("/info", (req, res) => {
  res.json({ name: "Elysor API", domain: "elysor.online" });
});

router.get("/products", (req, res) => {
  res.json({ success: true, count: products.length, data: products });
});

export default router;