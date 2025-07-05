import AmenitiesCard from "../../../components/AmenitiesCard";
import { createLazyRoute } from "@tanstack/react-router";
import { useContext,useState,useEffect } from "react";
import { submitContext } from "../../../utils/submitContext";

const AmenitiesPage = () => {
  const favouriteAmenities = [
    "WIFI",
    "T.V",
    "Kitchen",
    "Washing Machine",
    "Free Parking",
    "Paid Parking",
    "Air conditioner",
    "Personal Workspace",
  ];

  const standoutAmenities = [
    "Pool",
    "Hot Tub",
    "Patio",
    "BBQ Grill",
    "OutDoor Dine",
    "Bone Fire",
    "Pool Table",
    "Fire Place",
    "Piano",
    "Exercise Equipments",
    "Lake Access",
    "Beach Access",
    "Ski-In Out",
    "Outdoor Shower",
  ];

  const safetyAmenities = ["Smoke Alarm", "First-Aid", "Fire Extinguisher"];

  const { setSelected } = useContext(submitContext);

  const [allAmenities, setAllAmenities] = useState(() => {
    const stored = sessionStorage.getItem("amenities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("amenities", JSON.stringify(allAmenities));
    setSelected(allAmenities.length === 0);
  }, [allAmenities, setSelected]);

  const handleAmenityToggle = (option) => {
    setAllAmenities((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-10 lg:px-24 py-10 space-y-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Tell guests what your place has to offer
        </h1>
        <p className="text-base sm:text-lg text-neutral-500">
          You can add more amenities after you publish your listing.
        </p>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        <AmenitiesCard
          label="What about these guest favourites?"
          options={favouriteAmenities}
          selectedAmenities={allAmenities}
          onToggleAmenity={handleAmenityToggle}
        />
        <AmenitiesCard
          label="Do you have any standout amenities?"
          options={standoutAmenities}
          selectedAmenities={allAmenities}
          onToggleAmenity={handleAmenityToggle}
        />
        <AmenitiesCard
          label="Do you have any of these safety items?"
          options={safetyAmenities}
          selectedAmenities={allAmenities}
          onToggleAmenity={handleAmenityToggle}
        />
      </div>
    </div>
  );
};

export const Route = createLazyRoute("/newlist/amenities")({
  component: AmenitiesPage,
});
