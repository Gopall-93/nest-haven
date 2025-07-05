import React, { useEffect, useState,useContext } from "react";
import { submitContext } from "../../../utils/submitContext";


const TitlePage = () => {
  const {setSelected}= useContext(submitContext)
  const [input, setInput] = useState(() => {
    return sessionStorage.getItem("title") || "";
  });
  const [count, setCount] = useState(0);
  const handleInput = (e) => {
    setCount(e.currentTarget.value.length);

    setInput(e.currentTarget.value);
  };
  useEffect(() => {
    
    setCount(input.length);
    sessionStorage.setItem("title", input);
    if(input.length>0){
      setSelected(false)
    }
    else{
      setSelected(true)
    }
  }, [input]);

  return (
    <div className=" flex flex-col justify-center items-center space-y-4 mt-20">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">
          Now, let's give your house a title
        </h1>
        <p className="text-lg text-neutral-500 ">
          Short title works best. Have fun with it- You can always change it
          later.
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
          maxLength={32}
        ></textarea>
        <p>{count}/32</p>
      </form>
    </div>
  );
};

export default TitlePage;
