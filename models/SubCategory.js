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
    default : true
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDesc: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

mongoose.models = {};

export default mongoose.model("SubCategory", SubCategorySchema);
