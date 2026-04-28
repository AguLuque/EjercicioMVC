const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/",                 controller.getAll);
router.get("/:id",              controller.getById);
router.post("/",                controller.create);
router.patch("/:id/stock",      controller.updateStock);
router.post("/:id/buy",         controller.buy);
router.delete("/:id",           controller.remove);

module.exports = router;
