import React from "react";

const StepPages = ({step,head,para,src}) => {
  return (
    <div className="flex justify-center items-center px-20 space-x-20">
      <div className="flex flex-col justify-start items-start w-lg space-y-2">
        <h3 className="text-lg">{step}</h3>
        <h1 className="text-3xl font-semibold">{head}</h1>
        <p className="text-lg">
          {para}
        </p>
      </div>
      <div className="overflow-hidden w-2xl ">
        <video
          src={src}
          autoPlay
          muted
          playsInline
          controls={false} 
          className="w-full h-full  pointer-events-auto"
          style={{ objectFit: "cover" }}
        ></video>
      </div>
    </div>
  );
};

export default StepPages;
