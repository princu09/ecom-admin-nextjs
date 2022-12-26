import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";

const AddCategory = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`, data)
      .then(() => Router.push("/admin/subcategory"));
  };

  const [category, setCategory] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`)
      .then((res) => setCategory(res.data));
  }, []);

  return (
    <div className="rounded-lg bg-white p-5">
      <div className="font-semibold pb-5 mb-5 text-lg border-b flex justify-between items-center">
        <p className="font-semibold">Add Subcategory</p>
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
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("name", { required: true })}
          />
        </div>
        <div className="">
          <label htmlFor="">Category *</label>
          <select
            name="category"
            {...register("category")}
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
          >
            <option>Select Category...</option>
            {category &&
              category.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="">
          <label htmlFor="">Meta Title *</label>
          <input
            type="text"
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("metaTitle", { required: true })}
          />
        </div>
        <div className="">
          <label htmlFor="">Meta Description *</label>
          <input
            type="text"
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("metaDesc", { required: true })}
          />
        </div>
        <button className="bg-accentLight p-3 rounded-md font-semibold hover:bg-accentColor w-fit px-10 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
