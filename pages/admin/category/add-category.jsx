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
    <div>
      <div className="bg-accentShadow p-3 rounded-[3px] text-accentColor w-full flex items-center justify-between mb-5 font-medium">
        <p className="font-semibold">Add Category</p>
        <button
          className="flex items-center gap-2 text-sm border border-accentColor rounded-md px-3 p-2 bg-accentColor text-accentDarkBG hover:bg-transparent font-bold hover:text-accentColor"
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
        <button className="bg-accentShadow p-3 rounded-md hover:text-accentDarkBG font-semibold hover:bg-accentColor">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
