import React, { useState, useEffect } from "react";

const Discount = ({
  value,
  label,
  sublabel,
  dis,
  discountList,
  setDiscountList,
}) => {
  const isSelected = discountList.some((item) => item.label === label);

  const currentValue =
    discountList.find((item) => item.label === label)?.value || value;

  const [inputValue, setInputValue] = useState(currentValue);

  useEffect(() => {
    setInputValue(currentValue);
  }, [discountList]);


  useEffect(() => {
    sessionStorage.setItem("discount", JSON.stringify(discountList));
  }, [discountList]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    const updatedList = discountList.map((item) => {
      if (item.label === label) {
        return { label, value: newValue };
      }
      return item;
    });

    setDiscountList(updatedList);
  };

  const handleCheckboxChange = () => {
    let updatedList = [];

    if (!isSelected) {
      updatedList = [...discountList, { label, value: inputValue }];
    } else {
      updatedList = discountList.filter((item) => item.label !== label);
    }

    setDiscountList(updatedList);
  };

  return (
    <div
      className={`flex justify-between items-center space-x-50 border-2 p-4 rounded-2xl mt-10 transition-all duration-300 shadow-lg
        ${
          isSelected
            ? "bg-neutral-200/30"
            : "bg-neutral-100 opacity-50 border-neutral-200 shadow-none"
        }
      `}
    >
      <input
        disabled={dis || !isSelected}
        className={`w-13 border-1 mx-4 rounded-lg text-center p-1 text-lg transition-all duration-200 ${
          (dis || !isSelected) && "cursor-not-allowed focus:outline-none"
        }`}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="flex flex-col w-60">
        <h2 className="text-lg font-medium">{label}</h2>
        <p className="text-neutral-500">{sublabel}</p>
      </div>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="w-5 h-5 rounded-sm accent-rose-500"
      />
    </div>
  );
};

export default Discount;
