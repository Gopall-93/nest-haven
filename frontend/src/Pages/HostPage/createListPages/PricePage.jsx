import React, { useEffect, useRef, useState, useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { submitContext } from "../../../utils/submitContext";

const PricePage = () => {
  const inputRef = useRef();
  const { setSelected } = useContext(submitContext);
  const [input, setInput] = useState(
    () => sessionStorage.getItem("price") || "0"
  );
  const handleClick = () => {
    inputRef.current.focus();
  };
  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };
  useEffect(() => {
    sessionStorage.setItem("price", input);
    if (input !== "0") {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }, [input]);

  return (
    <div className="flex flex-col justify-center items-center space-y-10 mt-27">
      <div>
        <h1 className="text-3xl font-semibold">Now, set your Price</h1>
        <p className="text-lg text-neutral-500">You can change it anytime</p>
      </div>
      <div className="flex">
        <div>
          <input
            ref={inputRef}
            onChange={handleChange}
            className="w-40 h-20 text-center text-5xl font-bold focus:outline-none"
            type="text"
            value={input}
          />
          <button
            onClick={handleClick}
            className="bg-transparent border-1 border-neutral-400/40 cursor-pointer rounded-full p-1.5 "
          >
            <FaPen className="text-sm" />
          </button>
        </div>
      </div>
      <div className="bg-neutral-200/30 p-3 flex space-x-1 text-center shadow-2xl rounded-3xl">
        <FaMapMarkerAlt className="text-rose-600 self-center text-xl" />
        <p>Similar Listings</p>
      </div>
    </div>
  );
};

export default PricePage;
