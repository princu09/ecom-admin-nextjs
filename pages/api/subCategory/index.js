import ConnectDB from "../../../middleware/_db";
import SubCategory from "../../../models/SubCategory";
var slugify = require("slugify");

const handler = async (req, res) => {
  const { body, method } = req;

  if (method == "GET") {
    const subcategory = await SubCategory.find().populate("category")
    res.status(200).json(subcategory);
  } else if (method == "POST") {
    const subcategory = await new SubCategory({
      name: body.name,
      metaTitle: body.metaTitle,
      metaDesc: body.metaDesc,
      slug: slugify(body.name),
      category: body.category,
    });
    subcategory.save();
    res.status(200).json(subcategory);
  } else if (method == "PUT") {
    await SubCategory.findOneAndUpdate(
      {
        slug: body.slug,
      },
      {
        name: body.name,
        status: body.status,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
        category: body.category,
      }
    );
    res.status(200).json({ message: "success" });
  } else if (method == "DELETE") {
    await SubCategory.findOneAndDelete({ id: body.id });
    res.status(200).json({ message: "success" });
  }
};

export default ConnectDB(handler);
