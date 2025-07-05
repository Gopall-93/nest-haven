import React, { useEffect, useState } from "react";
import DescriptionButton from "../../../components/DescriptionButton";

const DescriptionPage = () => {
  
  const options = [
    "Peaceful",
    "Unique",
    "Family Friendly",
    "Stylish",
    "Central",
    "Spacious",
  ];
  
  return (
    <div className="flex flex-col space-y-10 mt-30 justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold">
          Next, let's describe your house
        </h1>
        <p className="text-lg text-neutral-500">
          Choose upto 2 highlights. We will use these to get your descritpion
          started
        </p>
      </div>
      <div className=" grid grid-cols-4 space-x-3 space-y-3">
        <DescriptionButton  options={options} />
      </div>
    </div>
  );
};

export default DescriptionPage;
