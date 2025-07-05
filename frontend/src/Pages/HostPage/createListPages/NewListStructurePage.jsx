import { useEffect, useState } from "react";
import HouseIcon from "@mui/icons-material/House";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CabinIcon from "@mui/icons-material/Cabin";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import HotelIcon from "@mui/icons-material/Hotel";
import Farmhouse from "@mui/icons-material/Agriculture";
import Tent from "@mui/icons-material/Festival";
import CastleIcon from "@mui/icons-material/Castle";
import CottageIcon from "@mui/icons-material/Cottage";
import TypeButton from "../../../components/TypeOfListButton";
import { useContext } from "react";
import { submitContext } from "../../../utils/submitContext";

const icons = [
  HouseIcon,
  ApartmentIcon,
  CabinIcon,
  CottageIcon,
  HouseboatIcon,
  HotelIcon,
  Farmhouse,
  Tent,
  CastleIcon,
];

const NewListStructurePage = () => {
  const { setSelected } = useContext(submitContext);
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return sessionStorage.getItem("category") || "";
  });

  const handleSelect = (label) => {
    setSelectedCategory(label);
    sessionStorage.setItem("category", label);
  };
  useEffect(() => {
    if (selectedCategory !== "") {
      setSelected(false);
    }
  }, [selectedCategory]);

  return (
    <>
      <h1 className="font-medium text-3xl mb-4 text-center">
        Which of these best describes your place?
      </h1>
      <div className="grid grid-cols-5 gap-4">
        <div></div>
        <div className="col-span-3 grid grid-cols-3">
          {icons.map((Icon, i) => {
            let label = Icon.type.render.displayName.split("Icon")[0];
            if (label === "Festival") label = "Tent";
            if (label === "Agriculture") label = "FarmHouse";

            return (
              <TypeButton
                key={i}
                Icon={Icon}
                label={label}
                isSelected={selectedCategory === label}
                onSelect={handleSelect}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};

export default NewListStructurePage;
