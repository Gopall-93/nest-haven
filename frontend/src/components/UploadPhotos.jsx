import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const UploadPhotos = ({ imagePreview }) => {
  return (
    <button className=" w-sm h-70 overflow-hidden rounded-2xl  border-2 border-dashed bg-neutral-500/20  flex  justify-center items-center">
      {imagePreview ? (
        <img
          src={imagePreview}
          alt=""
          className=" w-full h-full object-cover "
        />
      ) : (
        <FaCameraRetro className="text-6xl" />
      )}
    </button>
  );
};

export default UploadPhotos;
