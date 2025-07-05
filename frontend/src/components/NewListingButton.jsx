import React from "react";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { axiosInstance } from "../API/axiosInstance";
import { useNavigate } from "@tanstack/react-router";

const NewListingButton = ({ id }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const { data } = await axiosInstance.post(`/${id}/listid`);
    sessionStorage.setItem("newListId", data.id);
    return navigate({ to: "/host/newlist/overview" });
  };
  return (
    <div
      onClick={handleClick}
      className=" group flex justify-between space-x-20  items-center  border-b-2  p-4 border-neutral-300/50 cursor-pointer"
    >
      <span className=" text-center text-3xl p-2 rounded-xl">
        <BsFillHouseAddFill />
      </span>
      <h2 className="text-2xl ">Create a new Listing</h2>
      <span className="text-center text-2xl ">
        <FaArrowRight className=" group-hover:scale-110 transition-all ease-in-out group-hover:translate-x-1" />
      </span>
    </div>
  );
};

export default NewListingButton;
