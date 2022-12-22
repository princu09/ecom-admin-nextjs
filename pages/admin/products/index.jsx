import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import Router from "next/router";
import axios from "axios";
import Link from "next/link";

const Index = () => {
  const [search, setSearch] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const handleDelete = async (data) => {
    if (
      confirm(`Are You Sure ? You Want to Delete ${data.name} Product ?`) ==
      true
    ) {
      await axios
        .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`, {
          id: data._id,
        })
        .then(() => getData());
    }
  };

  const getData = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product`)
      .then((res) => {
        setFilterData(res.data), setPageData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const result = pageData.filter((res) => {
      return res.slug.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search, pageData]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
    {
      name: "Parent Category",
      selector: (row) => row.category.name,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <div>
          {row.status ? (
            <p className="text-[#219653] bg-[#21965333] p-2 rounded-md">
              Active
            </p>
          ) : (
            <p className="text-[#FF0000] bg-[#FF000033] p-2 rounded-md">
              In Active
            </p>
          )}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-5 items-center text-lg">
          <Link
            href={`/admin/subcategory/${row._id}`}
            className="cursor-pointer text-accentGreen bg-accentColor p-2 rounded"
          >
            <FaPen classNameˀ="text-accentLightBG" />
          </Link>
          <span
            className="cursor-pointer text-accentGreen bg-accentColor p-2 rounded"
            onClick={() => handleDelete(row)}
          >
            <FaTrash className="text-accentLightBG" />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-accentShadow p-3 rounded-[3px] text-accentColor w-full flex items-center justify-between mb-5 font-medium">
        <p className="font-semibold">All Products</p>
        <button
          className="flex items-center gap-2 text-sm border border-accentColor rounded-md px-3 p-2 bg-accentColor text-accentDarkBG hover:bg-transparent font-bold hover:text-accentColor"
          onClick={() => Router.push("/admin/products/add-product")}
        >
          <FaPlus /> ADD
        </button>
      </div>

      <div className="overflow-x-auto relative border border-accentColor p-2 my-3">
        <DataTable
          columns={columns}
          data={filterData}
          pagination
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search..."
              className="border border-accentColor text-accentDarkBG rounded-md p-2 w-[20%] my-2 focus:border-accentDarkBG focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
};

export default Index;