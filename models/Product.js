const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    longDesc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    lowStock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    comparePrice: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
    tag: {
      type: Object,
      required: false,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDesc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Product", ProductSchema);
