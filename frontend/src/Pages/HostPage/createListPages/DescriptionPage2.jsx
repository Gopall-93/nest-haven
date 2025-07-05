import React, { useEffect, useState, useContext } from "react";
import { submitContext } from "../../../utils/submitContext";

const DescriptionPage2 = () => {
  const { setSelected } = useContext(submitContext);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(() => {
    return sessionStorage.getItem("description") || "";
  });
  const handleInput = (e) => {
    setCount(e.currentTarget.value.length);
    setInput(e.currentTarget.value);
  };

  useEffect(() => {
    sessionStorage.setItem("description", input);
    setCount(input.length);
    if (input.length > 0) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  }, [input]);

  return (
    <div className=" flex flex-col justify-center items-center space-y-4 mt-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Create your description</h1>
        <p className="text-lg text-neutral-500 ">
          Share what makes your place special
        </p>
      </div>
      <form action="">
        <textarea
          value={input}
          onInput={handleInput}
          className=" resize-none border-1 border-black self-start p-2 text-lg mt-10"
          cols={70}
          rows={5}
          name=""
          id=""
          maxLength={500}
        ></textarea>
        <p>{count}/500</p>
      </form>
    </div>
  );
};

export default DescriptionPage2;
