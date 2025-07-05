import React, { useContext, useEffect } from "react";
import StepPages from "../../../components/StepPages";
import { submitContext } from "../../../utils/submitContext";
const Step2 = () => {
  const {setSelected} = useContext(submitContext)
  useEffect(()=>{
    setSelected(false)
  },[])
  return (
    <div>
      <StepPages
        step={"Step 2"}
        head={"Make your place stand out"}
        para={
          "In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then you’ll create a title and description."
        }
        src={"/public/step-2.mp4"}
      />
    </div>
  );
};

export default Step2;
