import ConnectDB from "../../../middleware/_db";
import SubCategory from "../../../models/SubCategory";

const handler = async (req, res) => {
  const { body, method } = req;

  if (method == "GET") {
    const subCategory = await SubCategory.find();
    res.status(200).json(subCategory);
  }
};

export default ConnectDB(handler);
