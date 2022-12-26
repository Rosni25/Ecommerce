const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please Enter poduct name"],
    },
    price: {
        type: Number,
        require: [true, "Please Enter product price"],
    },
    description: {
        type: String,
        require: [true, "Please Enter product name"],
    },
    images: [{
        public_id: {
            type: String,
            require: [true, "please select image"],
        },
        url: {
            type: String,
            required: [true, "please select url"],
        },
    }, ],
    noOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [{
        name: {
            type: String,
            required: [true, "please enter name"],

            comment: {
                type: String,
            },
            rating: {
                type: Number,
                required: [true, "please enter rating"],
            },
        },
    }, ],
    category: {
        type: String,
        required: [true, "please select a category"],
        enum: [
            "Electronic",
            "Clothes",
            "Food",
            "Smart Phone",
            "Laptops",
            "Headphone",
            "Home Application",
        ],
    },
});
module.exports = mongoose.model("Product", productSchema);