import { useState } from "react";

export const TypeOptionButton = ({ title, desc, Icon,selectedPrivacy,setSelectedPrivacy }) => {
  
  const handleClick = (title) => {
    setSelectedPrivacy(title)
  };
  return (
    <button
      onClick={() => handleClick(title)}
      className={`w-full flex items-center justify-between border border-neutral-300 rounded-lg p-5 hover:shadow-md transition-all text-left cursor-pointer${selectedPrivacy === title ? `border-2 border-rose-600 text-rose-600` :""}`}
    >
      <div className="mr-4">
        <h2 id="title" className="text-lg font-medium">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 mt-1">{desc}</p>
      </div>
      <Icon className="text-3xl text-neutral-600" />
    </button>
  );
};
