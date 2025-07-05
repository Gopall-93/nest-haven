import React, { useState, useEffect, useContext } from "react";
import { iconMap } from "../utils/iconMap";
import { submitContext } from "../utils/submitContext";

const DescriptionButton = ({ options }) => {
  const { setSelected } = useContext(submitContext);
  const [tagList, setTagList] = useState(() => {
    return JSON.parse(sessionStorage.getItem("descriptionTags")) || [];
  });
  const handleClick = (option) => {
    let updateTagList = [];
    if (tagList.includes(option)) {
      updateTagList = tagList.filter((tag) => tag !== option);
    } else {
      updateTagList = [...tagList, option];
    }
    setTagList(updateTagList);
    sessionStorage.setItem("descriptionTags", JSON.stringify(updateTagList));
  };
  useEffect(() => {
    if (tagList.length > 0) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  });
  return (
    <>
      {options.map((option, index) => {
        const Icon = iconMap[option];
        const isSelected = tagList.includes(option);
        if (!Icon) return null;

        return (
          <div
            onClick={() => handleClick(option)}
            key={index}
            className={`flex justify-center items-center gap-2 p-2  rounded-3xl h-15 space-x-2 cursor-pointer border-2 ${
              isSelected
                ? "border-rose-600 bg-rose-50 text-rose-600"
                : " border-neutral-400/50 hover:border-black"
            }`}
          >
            <Icon className="text-xl" />
            <p className="text-lg">{option}</p>
          </div>
        );
      })}
    </>
  );
};

export default DescriptionButton;
