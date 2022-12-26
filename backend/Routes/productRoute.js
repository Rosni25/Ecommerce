const express = require("express");
const {
    addProduct,
    getAllProducts,
    updateProduct,
    removeProduct,
} = require("../Controller/productController");
const router = express.Router();
// const { addProduct } = require("../controller/productController");
router.route("/").post(addProduct);
router.route("/").get(getAllProducts);
router.route("/:id").put(updateProduct);
router.route("/").delete(removeProduct);

module.exports = router;