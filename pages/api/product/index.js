import ConnectDB from "../../../middleware/_db";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { body, method } = req;

  if (method == "GET") {
    const product = await Product.find().populate("category")
    res.status(200).json(product);
  }
};

export default ConnectDB(handler);
