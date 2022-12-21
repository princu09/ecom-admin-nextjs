const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDesc: {
    type: String,
    required: true,
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

mongoose.models = {};

export default mongoose.model("SubCategory", SubCategorySchema);
