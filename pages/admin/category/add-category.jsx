import Router from "next/router";
import React from "react";
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
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, data)
      .then(() => Router.back(-1));
  };

  return (
    <div className="rounded-lg bg-white p-5">
      <div className="font-semibold pb-5 mb-5 text-lg border-b flex justify-between items-center">
        <p className="">Add Category</p>

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
            {...register("name")}
          />
        </div>
        <div className="">
          <label htmlFor="">Meta Title *</label>
          <input
            type="text"
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("metaTitle")}
          />
        </div>
        <div className="">
          <label htmlFor="">Meta Description *</label>
          <input
            type="text"
            className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
            {...register("metaDesc")}
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
