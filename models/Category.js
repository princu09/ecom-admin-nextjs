const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
  slug: {
    type: String,
    required: true,
    // unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDesc: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

export default mongoose.model("Category", CategorySchema);
