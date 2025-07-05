import React from "react";
import { Heart } from "lucide-react";

const Card = () => {
  return (
    <div className=" m-5 relative max-w-60 rounded-xl overflow-hidden shadow-2xl group  ">
      <div>
        <button className="absolute flex items-end justify-end w-full p-2">
          <Heart className=" transition-transform ease-in-out duration-200 hover:-translate-y-1  hover:scale-110 hover:fill-rose-600 hover:text-rose-600 cursor-pointer z-100" />
        </button>
        <img
          src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
          alt="test"
          className=" group-hover:scale-110 transition-transform ease-in-out duration-200 "
        />
      </div>
      <div className="  absolute inset-0   flex  items-end bg-gradient-to-t from-black/60  to-transparent text-white  ">
        <div className=" p-4 flex-col">
          <div className="flex  ">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold ml-10  ">Price</h1>
          </div>
          <div className="flex font-mono justify-between  ">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
