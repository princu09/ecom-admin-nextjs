import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import FormStep from "../../../components/FormStep";
import CKeditor from "../../../components/CKEditor";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // axios
    //   .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, data)
    //   .then(() => Router.push("/admin/products"));
  };

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentSubCategory, setCurrentSubCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
      .then((res) => setCategory(res.data));
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`)
      .then((res) => setSubcategory(res.data));
  }, []);

  const changeCategory = (e) => {
    setCurrentCategory(e.target.value);
    setInterval(() => {
      trigger("category");
    }, 1000);
  };

  const changeSubCategory = (e) => {
    setCurrentSubCategory(e.target.value);
    setInterval(() => {
      trigger("subcategory");
    }, 1000);
  };

  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="rounded-lg bg-white p-5">
      <div className="font-semibold pb-5 mb-5 text-lg border-b flex justify-between items-center">
        <p className="">Add Product</p>

        <button
          className="bg-accentLight p-3 rounded-md font-semibold hover:bg-accentColor w-fit px-5 hover:text-white text-sm flex items-center gap-3"
          onClick={() => Router.back(-1)}
        >
          <FaChevronLeft /> Back
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="">
          <label htmlFor="">Name *</label>
          <input
            type="text"
            className={`mt-3 border bg-transparent focus:outline-none p-2 rounded-md w-full ${
              errors.name ? "border-red-500" : "border-accentShadow"
            }`}
            {...register("name", { required: true })}
            onKeyUp={() => trigger("name")}
          />
          <p className="text-red-500 text-sm mt-2">
            {errors.name && "This Field is Required..."}
          </p>
        </div>
        <div className="">
          <label htmlFor="">Sort Description *</label>
          <textarea
            cols="30"
            rows="5"
            className={`mt-3 border bg-transparent focus:outline-none p-2 rounded-md w-full ${
              errors.desc ? "border-red-500" : "border-accentShadow"
            }`}
            onChange={() => trigger("desc")}
            {...register("desc", { required: true })}
          />
          <p className="text-red-500 text-sm mt-2">
            {errors.desc && "This Field is Required..."}
          </p>
        </div>
        <div className="">
          <label htmlFor="">Long Description *</label>
          <CKeditor
            value={editorData}
            className={"mt-3"}
            // name="longDesc"
            onChange={(data) => {
              setEditorData(data);
            }}
            editorLoaded={editorLoaded}
          />
          <input
            type="hidden"
            value={editorData}
            {...register("longDesc", {
              value: editorData && editorData,
            })}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="">
            <label htmlFor="">Category *</label>
            <select
              {...register("category", {
                required: true,
                value: currentCategory,
              })}
              name="category"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.category ? "border-red-500" : "border-accentShadow"
              }`}
              value={currentCategory || ""}
              onChange={changeCategory}
              multiple={false}
            >
              <option>Select Category...</option>
              {category.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <p className="text-red-500 text-sm mt-2">
              {errors.category && "This Field is Required..."}
            </p>
          </div>
          <div className="">
            <label htmlFor="">Subcategory *</label>
            <select
              {...register("subcategory", {
                required: true,
                value: currentSubCategory,
              })}
              name="subcategory"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.subcategory ? "border-red-500" : "border-accentShadow"
              }`}
              value={currentSubCategory || ""}
              onChange={changeSubCategory}
              multiple={false}
            >
              <option>Select Category...</option>
              {subcategory
                .filter((e) => {
                  return e.category._id == currentCategory;
                })
                .map((item, index) => {
                  return <option key={index}>{item.name}</option>;
                })}
            </select>
            <p className="text-red-500 text-sm mt-2">
              {errors.subcategory && "This Field is Required..."}
            </p>
          </div>
          <div className="">
            <label htmlFor="">SKU *</label>
            <input
              type="text"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.sku ? "border-red-500" : "border-accentShadow"
              }`}
              {...register("sku", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.sku && "This Field is Required..."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <label htmlFor="">Stock *</label>
            <input
              type="text"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.stock ? "border-red-500" : "border-accentShadow"
              }`}
              {...register("stock", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.stock && "This Field is Required..."}
            </p>
          </div>
          <div className="">
            <label htmlFor="">Low Stock *</label>
            <input
              type="text"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.lowStock ? "border-red-500" : "border-accentShadow"
              }`}
              {...register("lowStock", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.lowStock && "This Field is Required..."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <label htmlFor="">Price *</label>
            <input
              type="text"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.price ? "border-red-500" : "border-accentShadow"
              }`}
              {...register("price", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.price && "This Field is Required..."}
            </p>
          </div>
          <div className="">
            <label htmlFor="">Compare Price *</label>
            <input
              type="text"
              className={`mt-3 border  bg-transparent focus:outline-none p-2 rounded-md w-full ${
                errors.comparePrice ? "border-red-500" : "border-accentShadow"
              }`}
              {...register("comparePrice", { required: true })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.comparePrice && "This Field is Required..."}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <label htmlFor="">Meta Title *</label>
            <input
              type="text"
              className="mt-3 border border-accentShadow bg-transparent focus:outline-none p-2 rounded-md w-full"
              {...register("metaTitle", { required: false })}
            />
            <p className="text-red-500 text-sm mt-2">
              {errors.metaTitle && "This Field is Required..."}
            </p>
          </div>
          <div className="">
            <label htmlFor="">Meta Tags *</label>
            <input
              type="text"
              className="mt-3 border border-accentShadow bg-transparent focus:outline-none p-2 rounded-md w-full"
              {...register("metaTags", { required: false })}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="">Meta Description *</label>
          <input
            type="text"
            className="mt-3 border border-accentShadow bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("metaDesc", { required: false })}
          />
        </div>
        <button className="bg-accentLight p-3 rounded-md font-semibold hover:bg-accentColor w-fit px-10 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
