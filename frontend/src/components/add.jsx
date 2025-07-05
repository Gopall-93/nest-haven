import React, { useState, useEffect, useContext } from "react";
import { PlusIcon, Minus } from "lucide-react";
import { submitContext } from "../utils/submitContext";

const AddCounter = ({ label }) => {
  const { setSelected } = useContext(submitContext);
  const [count, setCount] = useState(() => {
    const saved = sessionStorage.getItem(label);
    return saved ? parseInt(saved, 10) : 0;
  });

  const handleIncrease = () => {
    const newCount = Math.min(count + 1, 50);
    setCount(newCount);
    sessionStorage.setItem(label, newCount);
  };

  const handleDecrease = () => {
    const newCount = Math.max(count - 1, 0);
    setCount(newCount);
    sessionStorage.setItem(label, newCount);
  };
  useEffect(() => {
    if (count !== 0) {
      setSelected(false);
    }
  }, [count]);

  return (
    <div className="border-b border-neutral-300/50 w-full sm:w-[60%] py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-5 space-y-4 sm:space-y-0">
        <div className="text-xl font-medium">{label}</div>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleIncrease}
            className="border border-neutral-400 rounded-full p-2 hover:bg-neutral-100 transition"
            aria-label={`Increase ${label}`}
          >
            <PlusIcon />
          </button>
          <span className="text-xl w-8 text-center">{count}</span>
          <button
            onClick={handleDecrease}
            className="border border-neutral-400 rounded-full p-2 hover:bg-neutral-100 transition"
            aria-label={`Decrease ${label}`}
          >
            <Minus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCounter;
