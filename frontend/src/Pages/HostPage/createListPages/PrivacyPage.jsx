import HomeIcon from "@mui/icons-material/Home";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import { TypeOptionButton } from "../../../components/TypeOptionButton";
import { useEffect, useState, useContext } from "react";
import { submitContext } from "../../../utils/submitContext";

const PrivacyPage = () => {
  const {setSelected} = useContext(submitContext)
  const [storedAccessibility, setStoredAccessibility] = useState(() => {
    return sessionStorage.getItem("accessibility") || "";
  });
  useEffect(() => {
    if(storedAccessibility !==""){
      setSelected(false)
    }
    sessionStorage.setItem("accessibility", storedAccessibility);
  }, [storedAccessibility]);

  return (
    <div className="flex flex-col items-center justify-center  p-6">
      <h1 className="text-3xl font-semibold mb-10 text-center">
        What type of place will guests have?
      </h1>
      <div className="space-y-6 w-full max-w-xl">
        <TypeOptionButton
          title={"The entire place"}
          desc={"Guests have the whole place to themselves."}
          Icon={HomeIcon}
          selectedPrivacy={storedAccessibility}
          setSelectedPrivacy={setStoredAccessibility}
        />
        <TypeOptionButton
          title="A private room"
          desc="Guests have their own room in a home, plus access to shared spaces."
          Icon={MeetingRoomIcon}
          selectedPrivacy={storedAccessibility}
          setSelectedPrivacy={setStoredAccessibility}
        />
        <TypeOptionButton
          title="A shared room in a hostel"
          desc="Guests sleep in a shared room in a professionally managed hostel with staff 24/7."
          Icon={BedroomParentIcon}
          selectedPrivacy={storedAccessibility}
          setSelectedPrivacy={setStoredAccessibility}
        />
      </div>
    </div>
  );
};

export default PrivacyPage;
