import Router from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { Switch } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

const EditCategory = ({ data }) => {
  const [pStatus, setPStatus] = useState(data.status);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (res) => {
    axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`, res)
      .then((res) => Router.push("/admin/category"));
  };

  return (
    <>
      <div>
        <div className="bg-accentShadow p-3 rounded-[3px] text-accentColor w-full flex items-center justify-between mb-5 font-medium">
          <p className="font-semibold">Edit Category</p>
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
              defaultValue={data.name}
              {...register("name")}
            />
          </div>
          <div className="">
            <label htmlFor="">Slug *</label>
            <input
              type="text"
              className="mt-3 border border-accentColor focus:outline-none p-2 rounded-md w-full bg-accentShadow"
              defaultValue={data.slug}
              {...register("slug", { value: data.slug })}
              disabled
            />
          </div>
          <div className="flex flex-col gap-3 my-5">
            <label htmlFor="" className="font-semibold">
              Status
            </label>
            <div className="flex gap-3 items-center h-10">
              <Switch
                className="bg-[#219653] checked:bg-[#FF0000]"
                {...register("status")}
                defaultChecked={data.status}
                onChange={(e) => setPStatus(e.target.checked)}
              />
              {pStatus ? (
                <p className="text-[#219653] bg-[#21965333] p-2 rounded-md">
                  Active
                </p>
              ) : (
                <p className="text-[#FF0000] bg-[#FF000033] p-2 rounded-md">
                  In Active
                </p>
              )}
            </div>
          </div>

          <div className="">
            <label htmlFor="">Meta Title *</label>
            <input
              type="text"
              className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
              {...register("metaTitle")}
              defaultValue={data.metaTitle}
            />
          </div>
          <div className="">
            <label htmlFor="">Meta Description *</label>
            <input
              type="text"
              className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full"
              {...register("metaDesc")}
              defaultValue={data.metaDesc}
            />
          </div>
          <button className="bg-accentShadow p-3 rounded-md hover:text-accentDarkBG font-semibold hover:bg-accentColor">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/category/${context.query._id}`
  ).then((res) => res.json());

  return {
    props: {
      data: data[0],
    },
  };
}

export default EditCategory;
