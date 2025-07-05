import React from "react";
import AddGuests from "../../../components/add";

const FloorPlan = () => {
  return (
    <div className=" mt-10 space-y-10 flex flex-col justify-center items-center ">
      <div className="text-start sapce-y-8">
        <h1 className="text-3xl font-semibold text-center">
          Share some basics about your place
        </h1>
        <p className="text-lg text-neutral-500 ">
          You'll add more details later, such as bed types.
        </p>
      </div>
      <AddGuests label={"Guests"} />
      <AddGuests label={"Bedrooms"} />
      <AddGuests label={"Beds"} />
      <AddGuests label={"Bathrooms"} />
    </div>
  );
};

export default FloorPlan;
