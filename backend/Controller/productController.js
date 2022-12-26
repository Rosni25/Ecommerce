const Product = require("../models/productModel"); //add aproduct
const SearchSort = require("../utils/SearchSort");

exports.addProduct = async(req, res, next) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).json({
            success: true,
            product: product,
        });
    } catch (e) {
        console.log(e);
    }
};
exports.getAllProducts = async(req, res) => {
    try {
        //  console.log(req.query);
        const searchSort = new SearchSort(Product.find(), req.query);
        const products = await searchSort.search().filter().pagination(5).query;
        return res.status(200).json({
            message: "Success",
            products,
        });
    } catch (e) {
        console.log(e);
    }
};
exports.updateProduct = async(req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({
                success: false,
            });
        }
        let updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            product: updateProduct,
        });
    } catch (e) {
        console.log(e);
    }
};

exports.removeProduct = async(req, res) => {
    try {
        const product = Product.findById(req.params.id);
        if (!product) {
            res.status(404).json({
                success: false,
            });
        }
        await product.remove();

        res.status(200).json({
            success: true,
            message: "The Product is removed",
        });
    } catch (e) {
        console.log(e);
    }
};