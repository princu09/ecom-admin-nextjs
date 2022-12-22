import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";

const AddProduct = () => {
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

    const [category, setCategory] = useState(null)
    const [subcategory, setSubcategory] = useState(null)
    const [filterSubcategory, setFilterSubcategory] = useState([])

    const filtersubcat = (e) => {
        const a = subcategory.filter(res => {
            return res.category._id == e
        })
        setFilterSubcategory(a)
    }

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/category`).then((res) => setCategory(res.data))
        axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/subcategory`).then((res) => setSubcategory(res.data))
    }, [])


    return (
        <div>
            <div className="bg-accentShadow p-3 rounded-[3px] text-accentColor w-full flex items-center justify-between mb-5 font-medium">
                <p className="font-semibold">Add Product</p>
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
                        {...register("name", { required: true })}
                    />
                </div>
                <div className="">
                    <label htmlFor="">Category *</label>
                    <select name="category" {...register("category")} className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full" onChange={(e) => filtersubcat(e.target.value)}>
                        <option value="">Select Category...</option>
                        {category && category.map((item, index) => {
                            return <option key={index} value={item._id}>
                                {item.name}
                            </option>
                        })}
                    </select>
                </div>
                <div className="">
                    <label htmlFor="">Subcategory *</label>
                    <select name="category" {...register("category")} className="mt-3 border border-accentColor bg-transparent focus:outline-none p-2 rounded-md w-full">
                        <option>Select Category...</option>
                        {filterSubcategory.map((item, index) => {
                            return <option key={index} value={item._id}>
                                {item.name}
                            </option>
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
                <button className="bg-accentShadow p-3 rounded-md hover:text-accentDarkBG font-semibold hover:bg-accentColor">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;