import React,{useContext,useEffect} from "react";
import StepPages from "../../../components/StepPages";
import { submitContext } from "../../../utils/submitContext";

const Step1 = () => {
  const {setSelected} = useContext(submitContext)
  useEffect(() => {
    setSelected(false)
  }, [])
  
  return (
    <div>
      <StepPages
        step={"Step 1"}
        head={"Tell us about your place"}
        para={
          "In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay."
        }
        src={"/public/step-1.mp4"}
      />
    </div>
  );
};

export default Step1;
