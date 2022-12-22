import ConnectDB from "../../../middleware/_db";
import Category from "../../../models/Category";
var slugify = require("slugify");

const handler = async (req, res) => {
  const { body, method } = req;

  if (method == "GET") {
    const category = await Category.find()
    res.status(200).json(category);
  } else if (method == "POST") {
    const category = await new Category({
      name: body.name,
      metaTitle: body.metaTitle,
      metaDesc: body.metaDesc,
      slug: slugify(body.name),
    });
    category.save();
    res.status(200).json(category);
  } else if (method == "PUT") {
    await Category.findOneAndUpdate(
      {
        slug: body.slug,
      },
      {
        name: body.name,
        status: body.status,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
      }
    );
    res.status(200).json({ message: "success" });
  } else if (method == "DELETE") {
    await Category.findOneAndDelete({ id: body.id });
    res.status(200).json({ message: "success" });
  }
};

export default ConnectDB(handler);
