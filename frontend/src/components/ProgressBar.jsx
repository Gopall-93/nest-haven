import React from "react";

const ProgressBar = ({ currentWidth, handleClick, selected, index, len }) => {
  return (
    <div className="w-full p-4 flex flex-col justify-end">
      {/* Progress Line */}
      <div
        style={{ width: `${currentWidth}%` }}
        className="h-1 bg-rose-500 rounded mb-2 transition-all duration-300"
      ></div>

      <div className="flex justify-between items-center">
        {index !== 0 ? (
          <button
            data-type="Dec"
            onClick={handleClick}
            className={`p-2 px-4 bg-transparent border-black border-2 text-center rounded-2xl cursor-pointer hover:bg-neutral-200`}
          >
            Back
          </button>
        ) : (
          <div className="p-2 px-4 invisible">Back</div>
        )}

        <button
          disabled={selected}
          data-type="Inc"
          onClick={handleClick}
          className={`self-end p-3 px-6 rounded-2xl text-center cursor-pointer ${
            selected
              ? `text-black/30 bg-rose-300/30`
              : "bg-rose-600 text-white hover:bg-rose-500"
          } ${
            (len === index+1)
              ? "bg-rose-600 text-white hover:bg-rose-500"
              : `text-black/30 bg-rose-300/30`
          }`}
        >
          {(len === index+1) ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
